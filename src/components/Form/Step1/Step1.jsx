import React, { useState } from "react";
import { connect } from "react-redux";
import { setStep, setStep1Data } from "./../../../store/form/form.actions";

const clothesLabels = [
  "ubrania, które nadają się do ponownego użycia",
  "ubrania, do wyrzucenia",
  "zabawki",
  "książki",
  "Inne"
];

const Step1 = (props) => {
  const [checkboxState1, setCheckboxState1] = useState(false);
  const [checkboxState2, setCheckboxState2] = useState(false);
  const [checkboxState3, setCheckboxState3] = useState(false);
  const [checkboxState4, setCheckboxState4] = useState(false);
  const [checkboxState5, setCheckboxState5] = useState(false);

  const nextPageClickHandler = (event) => {
    const checkboxes = [
      checkboxState1,
      checkboxState2,
      checkboxState3,
      checkboxState4,
      checkboxState5,
    ];
    const selectedCheckbox = checkboxes.find((checkbox) => checkbox === true);
    const index = checkboxes.indexOf(selectedCheckbox);
    const label = clothesLabels[index];

    event.preventDefault();
    props.setStep1Data({
      typeOfClothes: label,
    });
    props.setStep(1);
  };

  const checkCheckboxes = () => {
    return (
      checkboxState1 ||
      checkboxState2 ||
      checkboxState3 ||
      checkboxState4 ||
      checkboxState5
    );
  };

  const setCheckboxes = (index) => {
    setCheckboxState1(index === 1 ? !checkboxState1 : false);
    setCheckboxState2(index === 2 ? !checkboxState2 : false);
    setCheckboxState3(index === 3 ? !checkboxState3 : false);
    setCheckboxState4(index === 4 ? !checkboxState4 : false);
    setCheckboxState5(index === 5 ? !checkboxState5 : false);
  };

  return (
    <>
      <div className="step1">
        <h2 className="step1__headline">Zaznacz co chcesz oddać:</h2>
        <div className="step1__radio__box">
          <label htmlFor="type-of-items">
            <input type="radio" name="type-of-items" value={checkboxState1} />
            <span onClick={() => setCheckboxes(1)}></span>
            {clothesLabels[0]}
          </label>
          <label htmlFor="type-of-items">
            <input type="radio" name="type-of-items" value={checkboxState2} />
            <span onClick={() => setCheckboxes(2)}></span>
            {clothesLabels[1]}
          </label>
          <label htmlFor="type-of-items">
            <input type="radio" name="type-of-items" value={checkboxState3} />
            <span onClick={() => setCheckboxes(3)}></span>
            {clothesLabels[2]}
          </label>
          <label htmlFor="type-of-items">
            <input type="radio" name="type-of-items" value={checkboxState4} />
            <span onClick={() => setCheckboxes(4)}></span>
            {clothesLabels[3]}
          </label>
          <label htmlFor="type-of-items">
            <input type="radio" name="type-of-items" value={checkboxState5} />
            <span onClick={() => setCheckboxes(5)}></span>
            {clothesLabels[4]}
          </label>
        </div>
        <div className="step1__btn">
          <button onClick={nextPageClickHandler} disabled={!checkCheckboxes()}>
            Dalej
          </button>
        </div>
      </div>
    </>
  );
};



const mapDispatchToProps = (dispatch) => ({
  setStep: (activeStep) => dispatch(setStep(activeStep)),
  setStep1Data: (payload) =>
    dispatch(setStep1Data(payload)),
});

export default connect(null, mapDispatchToProps)(Step1);
