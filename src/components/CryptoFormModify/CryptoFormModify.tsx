import {
  faCalendar,
  faDollarSign,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCrypto from "../../hooks/useCrypto/useCrypto";
import { NewCrypto } from "../../store/interfaces/cryptoInterfaces";

import Button from "../Button/Button";
import { ButtonStyled } from "../Button/ButtonStyled";
import CryptoFormModifyStyled from "./CryptoFormModifyStyled";

let formData = new FormData();

interface CryptoFormModifyProps {
  crypto: NewCrypto;
}

const CryptoFormModify = ({ crypto }: CryptoFormModifyProps): JSX.Element => {
  const { modifyCrypto } = useCrypto();
  const [cryptoEdit, setCryptoEdit] = useState(crypto);

  useEffect(() => {
    setCryptoEdit({ ...crypto, ICO: new Date(crypto.ICO), logo: "" });
  }, [crypto]);

  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCryptoEdit({ ...cryptoEdit, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    formData.append("crypto", JSON.stringify({ ...cryptoEdit }));

    await modifyCrypto(formData, id!);
    navigate("/crypto");
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("logo", event.target.files![0]);
    onChangeData(event);
  };

  const [date, setDate] = useState("");
  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    setCryptoEdit({ ...cryptoEdit, ICO: new Date(event.target.value) });
  };

  const hasOneEmptyField =
    cryptoEdit.title.length < 1 ||
    cryptoEdit.ICO.toDateString().length < 1 ||
    cryptoEdit.description.length < 1;

  return (
    <>
      <CryptoFormModifyStyled>
        <section className="logo__container">
          <h1>
            <img
              className="logo__picture"
              src="/img/bitcoin-logo.png"
              alt="a crypto logo"
              height={"45px"}
              width={"45px"}
            ></img>
          </h1>
          <span className="logo__text">Crypto Realm</span>
        </section>
        <h2 className="crypto-form-modify__title">{"Modify your project!"}</h2>
        <form
          action=""
          onSubmit={onSubmitData}
          className="crypto-form-modify"
          noValidate
          data-testid="crypto-form-modify"
        >
          <div className="crypto-form-modify__container">
            <section className="crypto-form-modify__name-logo">
              <input
                className="crypto-form-modify__project-name"
                placeholder="  Enter title"
                onChange={onChangeData}
                value={cryptoEdit.title}
                type="text"
                id="title"
                autoComplete="off"
                required
              />
              <input
                className="crypto-form-modify__project-logo"
                placeholder="logo"
                onChange={onChangeFile}
                value={cryptoEdit.logo}
                type="file"
                id="logo"
                autoComplete="off"
              />
            </section>
            <section className="crypto-form-modify__description-container">
              <label
                htmlFor="description"
                className="crypto-form-modify__description-title"
              >
                Description
              </label>
              <input
                className="crypto-form-modify__description"
                placeholder="Enter a description"
                onChange={onChangeData}
                value={cryptoEdit.description}
                type="text"
                id="description"
                autoComplete="off"
                required
              />
            </section>
            <section className="crypto-form-modify__team-value__container">
              <div className="crypto-form-modify__team">
                <label htmlFor="team" className="crypto-form-modify__icons">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  <span className="crypto-form-modify__name-value">Team</span>
                </label>
                <input
                  className="crypto-form-modify__team-amount"
                  placeholder="Number"
                  onChange={onChangeData}
                  value={cryptoEdit.team}
                  type="number"
                  id="team"
                  autoComplete="off"
                  required
                ></input>
              </div>
              <div className="crypto-form-modify__value">
                <label htmlFor="Value" className="crypto-form-modify__icons">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <span className="crypto-form-modify__name-value">Value</span>
                </label>
                <input
                  className="crypto-form-modify__value-amount"
                  placeholder="Value"
                  onChange={onChangeData}
                  value={cryptoEdit.value}
                  type="number"
                  id="value"
                  autoComplete="off"
                  required
                />
              </div>
            </section>
            <div className="crypto-form-modify__ico">
              <label htmlFor="date" className="crypto-form-modify__icons">
                <FontAwesomeIcon icon={faCalendar} />
                <span className="crypto-form-modify__ico-title">ICO</span>
              </label>
              <input
                className="crypto-form-modify__ico-date"
                placeholder="Enter ICO"
                onChange={onChangeDate}
                value={date}
                type="date"
                id="ICO"
                autoComplete="off"
              />
              <></>
            </div>
          </div>
          <Button
            buttonText={"Modify"}
            type="submit"
            classNameTypeButton="button--big"
            actionOnclick={() => {}}
            isDisable={hasOneEmptyField}
          />
          <ButtonStyled
            onClick={() => {
              navigate("/crypto");
            }}
            className="link"
            id="link"
          >
            Back to the project list
          </ButtonStyled>
        </form>{" "}
      </CryptoFormModifyStyled>
    </>
  );
};

export default CryptoFormModify;
