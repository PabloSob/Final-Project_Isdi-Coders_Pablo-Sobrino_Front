import {
  faCalendar,
  faDollarSign,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { NewCrypto } from "../../store/interfaces/cryptoInterfaces";
import Button from "../Button/Button";
import { ButtonStyled } from "../Button/ButtonStyled";
import CryptoFormStyled from "./CryptoFormCreateStyled";

let formData = new FormData();

const CryptoFormCreate = (): JSX.Element => {
  const initialState: NewCrypto = {
    title: "",
    logo: "",
    description: "",
    team: 0,
    value: 0,
    ICO: new Date(),
  };

  const { createCrypto } = useCrypto();

  const [formCryptoData, setFormCryptoData] = useState(initialState);

  const navigate = useNavigate();

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormCryptoData({
      ...formCryptoData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    formData.append(
      "crypto",
      JSON.stringify({
        title: formCryptoData.title,
        description: formCryptoData.description,
        team: formCryptoData.team,
        value: formCryptoData.value,
        ICO: formCryptoData.ICO,
      })
    );

    await createCrypto(formData);

    setFormCryptoData(initialState);
    formData = new FormData();
    navigate("/crypto");
  };
  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("logo", event.target.files![0]);
    onChangeData(event);
  };

  const [date, setDate] = useState("");
  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    setFormCryptoData({
      ...formCryptoData,
      ICO: new Date(event.target.value),
    });
  };

  const hasOneEmptyField =
    formCryptoData.title.length < 1 ||
    formCryptoData.ICO.toDateString().length < 1 ||
    formCryptoData.description.length < 1;

  return (
    <>
      <CryptoFormStyled>
        <section className="logo__container">
          <h1>
            <img
              className="logo__picture"
              src="/img/bitcoin-logo.png"
              alt="a crypto logo"
              width={"45px"}
            ></img>
          </h1>
          <span className="logo__text">Crypto Realm</span>
        </section>
        <h2 className="crypto-form-create__title">Create your project!</h2>
        <form
          action=""
          onSubmit={onSubmitData}
          className="crypto-form-create"
          noValidate
          data-testid="crypto-form-create"
        >
          <div className="crypto-form-create__container">
            <section className="crypto-form-create__name-logo">
              <input
                className="crypto-form-create__project-name"
                placeholder="Enter title"
                onChange={onChangeData}
                value={formCryptoData.title}
                type="text"
                id="title"
                autoComplete="off"
                required
              />
              <input
                className="crypto-form-create__project-logo"
                placeholder="logo"
                onChange={onChangeFile}
                value={formCryptoData.logo}
                type="file"
                id="logo"
                autoComplete="off"
                required
              />
            </section>
            <section className="crypto-form-create__description-container">
              <label
                htmlFor="description"
                className="crypto-form-create__description-title"
              >
                Description
              </label>
              <input
                className="crypto-form-create__description"
                placeholder="Enter a description"
                onChange={onChangeData}
                value={formCryptoData.description}
                type="text"
                id="description"
                autoComplete="off"
                required
              />
            </section>
            <section className="crypto-form-create__team-value__container">
              <div className="crypto-form-create__team">
                <label htmlFor="team" className="crypto-form-create__icons">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  <span className="crypto-form-create__name-value">Team</span>
                </label>
                <input
                  className="crypto-form-create__team-amount"
                  placeholder="Number"
                  onChange={onChangeData}
                  value={formCryptoData.team}
                  type="number"
                  id="team"
                  autoComplete="off"
                  required
                ></input>
              </div>
              <div className="crypto-form-create__value">
                <label htmlFor="Value" className="crypto-form-create__icons">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <span className="crypto-form-create__name-value">Value</span>
                </label>
                <input
                  className="crypto-form-create__value-amount"
                  placeholder="Value"
                  onChange={onChangeData}
                  value={formCryptoData.value}
                  type="number"
                  id="value"
                  autoComplete="off"
                  required
                />
              </div>
            </section>
            <div className="crypto-form-create__ico">
              <label htmlFor="date" className="crypto-form-create__icons">
                <FontAwesomeIcon icon={faCalendar} />
                <span className="crypto-form-create__ico-title">ICO</span>
              </label>
              <input
                className="crypto-form-create__ico-date"
                placeholder="Enter ICO"
                onChange={onChangeDate}
                value={date}
                type="date"
                id="ICO"
                autoComplete="off"
                required
              />
              <></>
            </div>
          </div>
          <Button
            buttonText={"Create"}
            type="submit"
            classNameTypeButton="button--big"
            actionOnclick={() => {}}
            isDisable={hasOneEmptyField}
          />
          <ButtonStyled
            onClick={() => {
              navigate(`/crypto`);
            }}
            className="link"
            id="link"
          >
            Back to the project list
          </ButtonStyled>
        </form>{" "}
      </CryptoFormStyled>
    </>
  );
};
export default CryptoFormCreate;
