import React, { useState } from "react";
import { connect } from "react-redux";
import { setStep, setStep4Data } from "../../../store/form/form.actions";
import {
  streetErrorMessage,
  cityErrorMessage,
  zipCodeErrorMessage,
  validateZipCode,
  phoneNumberErrorMessage,
  dateErrorMessage,
  validateDate,
  timeErrorMessage,
  validateTime,
} from "../../Login/Login.helpers";

const Step4 = (props) => {
  const [street, setStreet] = useState("");
  const [streetError, setStreetError] = useState([false, ""]);
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState([false, ""]);
  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState([false, ""]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState([false, ""]);
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState([false, ""]);
  const [time, setTime] = useState("");
  const [timeError, setTimeError] = useState([false, ""]);
  const [notes, setNotes] = useState("");

  const streetHandler = (event) => {
    const { value } = event.target;
    setStreet(value);
  };

  const cityHandler = (event) => {
    const { value } = event.target;
    setCity(value);
  };

  const zipCodeHandler = (event) => {
    const { value } = event.target;
    setZipCode(value);
  };

  const phoneNumberHandler = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };

  const dateHandler = (event) => {
    const { value } = event.target;
    setDate(value);
  };

  const timeHandler = (event) => {
    const { value } = event.target;
    setTime(value);
  };

  const notesHandler = (event) => {
    const { value } = event.target;
    setNotes(value);
  };

  const confirmationHandler = (event) => {
    event.preventDefault();

    const isStreetValid =
      street.length > 1;

      isStreetValid
        ? setStreetError([false, ""])
        : setStreetError([true, streetErrorMessage]);

    const isCityValid =
      city.length > 1;

      isCityValid
        ? setCityError([false, ""])
        : setCityError([true, cityErrorMessage]);

    const isZipCodeValid = validateZipCode(zipCode);

    isZipCodeValid
      ? setZipCodeError([false, ""])
      : setZipCodeError([true, zipCodeErrorMessage]);

    const isPhoneNumberValid =
      phoneNumber.toString().length === 9;

      isPhoneNumberValid
        ? setPhoneNumberError([false, ""])
        : setPhoneNumberError([true, phoneNumberErrorMessage]);

    const isDateValid = validateDate(date);

    isDateValid
      ? setDateError([false, ""])
      : setDateError([true, dateErrorMessage]);

    const isTimeValid = validateTime(time)

    isTimeValid
      ? setTimeError([false, ""])
      : setTimeError([true, timeErrorMessage]);


    if (
      isStreetValid &&
      isCityValid &&
      isZipCodeValid &&
      isPhoneNumberValid &&
      isDateValid &&
      isTimeValid
    ) {
      props.setStep4Data({
        street,
        city,
        zipCode,
        phoneNumber,
        date,
        time,
        notes,
      });
      props.setStep(4);
    }
  };

  const prevPageClickHandler = (event) => {
    event.preventDefault();
    props.setStep(2);
  };

  return (
    <>
      <div className="step4">
        <h2 className="step4__headline">
          Podaj adres oraz termin odbioru rzeczy przez kuriera
        </h2>
        <div className="step4__data">
          <div className="step4__adress">
            <h3>Adres odbioru:</h3>
            <div className="step4__adress__box">
              <div className="step4__adress__box__container">
                <label htmlFor="street">Ulica</label>
                <input type="text" name="street" onChange={streetHandler} />
              </div>
              {streetError[0] && (
                <p className="step4__adress__box__street--error">
                  {streetError[1]}
                </p>
              )}
            </div>
            <div className="step4__adress__box">
              <div className="step4__adress__box__container">
                <label htmlFor="city">Miasto</label>
                <input type="text" name="city" onChange={cityHandler} />
              </div>
              {cityError[0] && (
                <p className="step4__adress__box__city--error">
                  {cityError[1]}
                </p>
              )}
            </div>
            <div className="step4__adress__box">
              <div className="step4__adress__box__container">
                <label htmlFor="zipCode">
                  Kod
                  <br />
                  pocztowy
                </label>
                <input type="text" name="zipCode" onChange={zipCodeHandler} />
              </div>
              {zipCodeError[0] && (
                <p className="step4__adress__box__zip-code--error">
                  {zipCodeError[1]}
                </p>
              )}
            </div>
            <div className="step4__adress__box">
              <div className="step4__adress__box__container">
                <label htmlFor="phoneNumber">
                  Numer
                  <br />
                  telefonu
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={phoneNumberHandler}
                />
              </div>
              {phoneNumberError[0] && (
                <p className="step4__adress__box__phone-number--error">
                  {phoneNumberError[1]}
                </p>
              )}
            </div>
          </div>
          <div className="step4__term">
            <h3>Termin odbioru:</h3>
            <div className="step4__term__box">
              <div className="step4__term__box__container">
                <label htmlFor="date">Data</label>
                <input type="date" name="date" onChange={dateHandler} />
              </div>
              {dateError[0] && (
                <p className="step4__term__box__date--error">{dateError[1]}</p>
              )}
            </div>
            <div className="step4__term__box">
              <div className="step4__term__box__container">
                <label htmlFor="time">Godzina</label>
                <input type="time" name="time" onChange={timeHandler} />
              </div>
              {timeError[0] && (
                <p className="step4__term__box__time--error">{timeError[1]}</p>
              )}
            </div>
            <div className="step4__term__box">
              <div className="step4__term__box__container">
                <label htmlFor="notes">
                  Uwagi
                  <br />
                  dla kuriera
                </label>
                <textarea
                  type="text"
                  name="notes"
                  onChange={notesHandler}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="step4__btns">
          <button onClick={prevPageClickHandler}>Wstecz</button>
          <button onClick={confirmationHandler}>Dalej</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDispatchToProps = (dispatch) => ({
  setStep: (activeStep) => dispatch(setStep(activeStep)),
  setStep4Data: (payload) => dispatch(setStep4Data(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step4);
