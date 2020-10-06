import React from "react";
import { connect } from "react-redux";
import { setStep, setStep5Data } from "../../../store/form/form.actions";

const Step5 = ({ form, setStep }) => {
  const nextPageClickHandler = (event) => {
    event.preventDefault();
    setStep(5);
  };

  const prevPageClickHandler = (event) => {
    event.preventDefault();
    setStep(3);
  };


  return (
    <>
    {console.log(form)}
      <div className="step5">
        <h2 className="step5__headline">Podsumowanie Twojej darowizny</h2>
        <div className="step5__box__sum">
          <h3>Oddajesz:</h3>
          <div className="step5__box__sum__items">
            <div></div>
            <p>
              {form.numberOfBags > 1  
                ? form.numberOfBags > 4 
                    ? form.numberOfBags + " worków, "
                    : form.numberOfBags + " worki, "
                : form.numberOfBags + " worek, "
            }
              {form.typeOfClothes},{" "}
              {form.needy.join(", ").replace(/,\s*$/, "")}
              
            </p>
          </div>
          <div className="step5__box__sum__localization">
            <div></div>
            <p>dla lokalizacji: {form.localization || form.organization}</p>
          </div>
        </div>
        <div className="step5__box__data">
          <div className="step5__box__data__adress">
            <h3>Adres odbioru:</h3>
            <div className="step5__box__data__adress__item">
              <p>Ulica</p>
              <p>{form.street.street}</p>
            </div>
            <div className="step5__box__data__adress__item">
              <p>Miasto</p>
              <p>{form.city.city}</p>
            </div>
            <div className="step5__box__data__adress__item">
              <p>
                Kod
                <br />
                pocztowy
              </p>
              <p>{form.zipCode.zipCode}</p>
            </div>
            <div className="step5__box__data__adress__item">
              <p>
                Numer
                <br />
                telefonu
              </p>
              <p>{form.phoneNumber.phoneNumber}</p>
            </div>
          </div>
          <div className="step5__box__data__term">
            <h3>Termin odbioru:</h3>
            <div className="step5__box__data__term__item">
              <p>Data</p>
              <p>{form.date.date}</p>
            </div>
            <div className="step5__box__data__term__item">
              <p>Godzina</p>
              <p>{form.time.time}</p>
            </div>
            <div className="step5__box__data__term__item">
              <p>
                Uwagi
                <br />
                dla kuriera
              </p>
              <p>
                {form.notes.notes}
              </p>
            </div>
          </div>
        </div>
        <div className="step5__btns">
          <button onClick={prevPageClickHandler}>Wstecz</button>
          <button onClick={nextPageClickHandler}>Dalej</button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
