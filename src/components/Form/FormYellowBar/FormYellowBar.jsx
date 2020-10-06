import React from "react";
import { connect } from "react-redux";

const FormYellowBar = ({ form: { activeStep } }) => {
  return (
    <>
      <section className="form__yellow__bar" id="form-section-start">
        <div className="form__yellow__bar__text">
          <h2>Ważne</h2>
          <p>
            {activeStep === 0 &&
              "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}
            {activeStep === 1 &&
              "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}
            {activeStep === 2 && "Podaj adres oraz termin odbioru rzeczy."}
            {activeStep === 3 && "Podaj adres oraz termin odbioru rzeczy."}
          </p>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps)(FormYellowBar);
