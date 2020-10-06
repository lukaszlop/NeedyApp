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
      setStreet({street: value});
  }

  const cityHandler = (event) => {
      const { value } = event.target;
      setCity({city: value});
  }

  const zipCodeHandler = (event) => {
      const { value } = event.target;
      setZipCode({zipCode: value});
  }

  const phoneNumberHandler = (event) => {
      const { value } = event.target;
      setPhoneNumber({phoneNumber: value});
  }

  const dateHandler = (event) => {
      const { value } = event.target;
      setDate({date: value});
  }

  const timeHandler = (event) => {
      const { value } = event.target;
      setTime({time: value});
  }
  
  const notesHandler = (event) => {
      const { value } = event.target;
      setNotes({notes: value});
  }

  const confirmationHandler = (event) => {
      const isStreetValid = street.lenght > 1
      ? setStreetError([false, ""])
      : setStreetError([true, streetErrorMessage]);

      const isCityValid = city.lenght > 1
      ? setCityError([false, ""])
      : setCityError([true, cityErrorMessage]);

      const isZipCodeValid = validateZipCode(zipCode)
        ? setZipCodeError([false, ""])
        : setZipCodeError([true, zipCodeErrorMessage]);

      const isPhoneNumberValid = phoneNumber.toString().length === 9
        ? setPhoneNumberError([false, ""])
        : setPhoneNumberError([true, phoneNumberErrorMessage]);

      const isDateValid = validateDate(date)
        ? setDateError([false, ""])
        : setDateError([true, dateErrorMessage]);

      const isTimeValid = validateTime(time)
        ? setTimeError([false, ""])
        : setTimeError([true, timeErrorMessage]);
 
        if (isStreetValid && 
            isCityValid && 
            isZipCodeValid && 
            isPhoneNumberValid &&
            isDateValid &&
            isTimeValid ) {
            props.form({street, city, zipCode, phoneNumber, date, time, notes});
        }
  }

  const checkData = () => {
      return (
        street.value || 
        city.value ||
        zipCode.value ||
        phoneNumber.value ||
        date.value ||
        time.value
      )
  }

  const nextPageClickHandler = (event) => {
    event.preventDefault();
    props.setStep4Data({
        street,
        city,
        zipCode,
        phoneNumber,
        date,
        time,
        notes
    });
    props.setStep(4);
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
              <label htmlFor="street">Ulica</label>
              <input type="text" name="street" onChange={streetHandler}/>
              {streetError[0] && <p className="step4__adress__box__street--error">{streetError[1]}</p>}
            </div>
            <div className="step4__adress__box">
              <label htmlFor="city">Miasto</label>
              <input type="text" name="city" onChange={cityHandler}/>
              {cityError[0] && <p className="step4__adress__box__city--error">{cityError[1]}</p>}
            </div>
            <div className="step4__adress__box">
              <label htmlFor="zipCode">
                Kod
                <br />
                pocztowy
              </label>
              <input type="text" name="zipCode" onChange={zipCodeHandler}/>
              {zipCodeError[0] && <p className="step4__adress__box__zip-code--error">{zipCodeError[1]}</p>}
            </div>
            <div className="step4__adress__box">
              <label htmlFor="phoneNumber">
                Numer
                <br />
                telefonu
              </label>
              <input type="text" name="phoneNumber" onChange={phoneNumberHandler}/>
              {phoneNumberError[0] && <p className="step4__adress__box__phone-number--error">{phoneNumberError[1]}</p>}
            </div>
          </div>
          <div className="step4__term">
            <h3>Termin odbioru:</h3>
            <div className="step4__term__box">
              <label htmlFor="date">Data</label>
              <input type="date" name="date" onChange={dateHandler}/>
              {dateError[0] && <p className="step4__term__box__date--error">{dateError[1]}</p>}
            </div>
            <div className="step4__term__box">
              <label htmlFor="time">Godzina</label>
              <input type="time" name="time" onChange={timeHandler}/>
              {timeError[0] && <p className="step4__term__box__time--error">{timeError[1]}</p>}
            </div>
            <div className="step4__term__box">
              <label htmlFor="notes">
                Uwagi
                <br />
                dla kuriera
              </label>
              <textarea type="text" name="notes" onChange={notesHandler}></textarea>
            </div>
          </div>
        </div>
        <div className="step4__btns">
          <button onClick={prevPageClickHandler}>Wstecz</button>
          <button onClick={confirmationHandler, nextPageClickHandler}>Dalej</button>
        </div>
      </div>
      {console.log(props.form)}
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
