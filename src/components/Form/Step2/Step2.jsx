import React, { useState } from "react";
import { connect } from "react-redux";
import { setStep, setStep2Data } from "../../../store/form/form.actions";

const Step2 = (props) => {
  const [selectState, setSelectState] = useState("");

  const checkSelect = () => {
    return selectState !== "";
  };

  const nextPageClickHandler = (event) => {
    event.preventDefault();
    props.setStep2Data({ numberOfBags: selectState });
    props.setStep(2);
  };

  const prevPageClickHandler = (event) => {
    event.preventDefault();
    props.setStep(0);
  };

  const selectHandler = (event) => {
    const { value } = event.target;
    setSelectState(value);
  };

  return (
    <>
      <div className="step2">
        <h2 className="step2__headline">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </h2>
        <div className="step2__select">
          <label htmlFor="bags-number">Liczba 60l worków:</label>
          <select
            value={selectState}
            name="bags-number"
            id="bags-number"
            onChange={selectHandler}
          >
            <option disabled value="">
              wybierz
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="step2__btns">
          <button onClick={prevPageClickHandler}>Wstecz</button>
          <button onClick={nextPageClickHandler} disabled={!checkSelect()}>
            Dalej
          </button>
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
  setStep2Data: (payload) => dispatch(setStep2Data(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
