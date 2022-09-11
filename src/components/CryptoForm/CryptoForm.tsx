import {
  faCalendar,
  faDollarSign,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { NewOrModifyCrypto } from "../../store/interfaces/cryptoInterfaces";
import Button from "../Button/Button";
import { ButtonStyled } from "../Button/ButtonStyled";
import CryptoFormStyled from "./CryptoFormStyled";

interface CryptoFormProps {
  initialState: NewOrModifyCrypto;
}

let formData = new FormData();

const CryptoForm = ({ initialState }: CryptoFormProps): JSX.Element => {
  const { createCrypto } = useCrypto();
  const [newCrypto, setNewCrypto] = useState(initialState);

  const navigate = useNavigate();

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCrypto({ ...newCrypto, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (initialState.id) {
    } else {
      await createCrypto(newCrypto);
      navigate("/crypto");
    }
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("logo", event.target.files![0]);
    onChangeData(event);
  };

  const [date, setDate] = useState("");
  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    setNewCrypto({ ...newCrypto, ICO: new Date(event.target.value) });
  };

  const hasOneEmptyField =
    newCrypto.title.length < 1 ||
    newCrypto.ICO.toDateString().length < 1 ||
    newCrypto.description.length < 1;

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
        <h2 className="crypto-form__title">
          {newCrypto.id ? "Update your project!" : "Create your Project!"}
        </h2>
        <form
          action=""
          onSubmit={onSubmitData}
          className="crypto-form"
          noValidate
          data-testid="crypto-form"
        >
          <div className="crypto-form__container">
            <section className="crypto-form__name-logo">
              <input
                className="crypto-form__project-name"
                placeholder="  Enter title"
                onChange={onChangeData}
                value={newCrypto.title}
                type="text"
                id="title"
                autoComplete="off"
                required
              />
              <input
                className="crypto-form__project-logo"
                placeholder="logo"
                onChange={onChangeFile}
                value={newCrypto.logo}
                type="file"
                id="logo"
                autoComplete="off"
                required
              />
            </section>
            <section className="crypto-form__description-container">
              <label
                htmlFor="description"
                className="crypto-form__description-title"
              >
                Description
              </label>
              <input
                className="crypto-form__description"
                placeholder="Enter a description"
                onChange={onChangeData}
                value={newCrypto.description}
                type="text"
                id="description"
                autoComplete="off"
                required
              />
            </section>
            <section className="crypto-form__team-value__container">
              <div className="crypto-form__team">
                <label htmlFor="team" className="crypto-form__icons">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  <span className="crypto-form__name-value">Team</span>
                </label>
                <input
                  className="crypto-form__team-amount"
                  placeholder="Number"
                  onChange={onChangeData}
                  value={newCrypto.team}
                  type="number"
                  id="team"
                  autoComplete="off"
                  required
                ></input>
              </div>
              <div className="crypto-form__value">
                <label htmlFor="Value" className="crypto-form__icons">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <span className="crypto-form__name-value">Value</span>
                </label>
                <input
                  className="crypto-form__value-amount"
                  placeholder="Value"
                  onChange={onChangeData}
                  value={newCrypto.value}
                  type="number"
                  id="value"
                  autoComplete="off"
                  required
                />
              </div>
            </section>
            <div className="crypto-form__ico">
              <label htmlFor="date" className="crypto-form__icons">
                <FontAwesomeIcon icon={faCalendar} />
                <span className="crypto-form__ico-title">ICO</span>
              </label>
              <input
                className="crypto-form__ico-date"
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
            buttonText={newCrypto.id ? "Modify" : "Create"}
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

export default CryptoForm;
