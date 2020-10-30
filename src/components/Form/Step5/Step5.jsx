import { firestore } from "firebase";
import React from "react";
import { connect, useSelector } from "react-redux";
import { setStep } from "../../../store/form/form.actions";

const Step5 = ({ form, setStep, auth, firebase }) => {
  const applications = useSelector(
    (state) => state.firestore.ordered.applications
  );

  const userApplication = applications.find(
    (application) => application.uid === auth.uid
  );

  const userData = applications
    ? userApplication
      ? userApplication.data
      : []
    : [];

  const nextPageClickHandler = (event) => {
    event.preventDefault();
    firestore()
      .collection("applications")
      .doc(auth.uid)
      .set({
        uid: auth.uid,
        data: [
          ...userData,
          {
            typeOfClothes: form.typeOfClothes,
            numberOfBags: form.numberOfBags,
            localization: form.localization,
            needy: form.needy,
            organization: form.organization,
            street: form.street,
            city: form.city,
            zipCode: form.zipCode,
            phoneNumber: form.phoneNumber,
            date: form.date,
            time: form.time,
            notes: form.notes,
          },
        ],
      })
      .then(() => {
        setStep(5);
      });
  };

  const prevPageClickHandler = (event) => {
    event.preventDefault();
    setStep(3);
  };

  return (
    <>
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
                : form.numberOfBags + " worek, "}
              {form.typeOfClothes}, {form.needy.join(", ").replace(/,\s*$/, "")}
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
              <p>{form.street}</p>
            </div>
            <div className="step5__box__data__adress__item">
              <p>Miasto</p>
              <p>{form.city}</p>
            </div>
            <div className="step5__box__data__adress__item">
              <p>
                Kod
                <br />
                pocztowy
              </p>
              <p>{form.zipCode}</p>
            </div>
            <div className="step5__box__data__adress__item">
              <p>
                Numer
                <br />
                telefonu
              </p>
              <p>{form.phoneNumber}</p>
            </div>
          </div>
          <div className="step5__box__data__term">
            <h3>Termin odbioru:</h3>
            <div className="step5__box__data__term__item">
              <p>Data</p>
              <p>{form.date}</p>
            </div>
            <div className="step5__box__data__term__item">
              <p>Godzina</p>
              <p>{form.time}</p>
            </div>
            <div className="step5__box__data__term__item">
              <p>
                Uwagi
                <br />
                dla kuriera
              </p>
              <p>{form.notes}</p>
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
  auth: state.firebase.auth,
  firebase: state.firebase,
});

const mapDispatchToProps = (dispatch) => ({
  setStep: (activeStep) => dispatch(setStep(activeStep)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
