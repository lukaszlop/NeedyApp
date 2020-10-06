import React, { useState } from "react";
import { connect } from "react-redux";
import { setStep, setStep3Data } from "../../../store/form/form.actions";

const helpGroupsLabels = [
    "dzieciom",
    "samotnym matkom",
    "bezdomnym",
    "niepełnosprawnym",
    "osobom starszym"
];

const Step3 = (props) => {
  const [localizationSelect, setLocalizationSelect] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [checkboxState1, setCheckboxState1] = useState(false);
  const [checkboxState2, setCheckboxState2] = useState(false);
  const [checkboxState3, setCheckboxState3] = useState(false);
  const [checkboxState4, setCheckboxState4] = useState(false);
  const [checkboxState5, setCheckboxState5] = useState(false);

  const checkSelect = () => {
    const checkboxes = [
      checkboxState1,
      checkboxState2,
      checkboxState3,
      checkboxState4,
      checkboxState5,
    ];
    const selectedCheckbox = checkboxes.find((checkbox) => checkbox === true);
    return (
      (localizationSelect !== "" || organizationName !== "") && selectedCheckbox
    );
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
   switch(index){
       case 1:
            setCheckboxState1(!checkboxState1);
        break;
        case 2:
            setCheckboxState2(!checkboxState2);
        break;
        case 3:
            setCheckboxState3(!checkboxState3);
        break;
        case 4:
            setCheckboxState4(!checkboxState4);
        break;
        case 5:
            setCheckboxState5(!checkboxState5);
        break;
   }
  };

  const nextPageClickHandler = (event) => {
    const checkboxes = [
      checkboxState1,
      checkboxState2,
      checkboxState3,
      checkboxState4,
      checkboxState5
    ];

    const selectedCheckboxes = checkboxes.filter(
      (checkbox) => checkbox === true
    );

    const needy = selectedCheckboxes.map((checkbox) => {
      const index = checkboxes.indexOf(checkbox);
      const label = helpGroupsLabels[index];
      return label;
    });

    event.preventDefault();
    props.setStep3Data({
      localization: localizationSelect,
      needy,
      organization: organizationName,
    });
    props.setStep(3);
  };

  const prevPageClickHandler = (event) => {
    event.preventDefault();
    props.setStep(1);
  };

  const setLocationHandler = (event) => {
    const { value } = event.target;
    setLocalizationSelect(value);
  };

  const setOrganizationHandler = (event) => {
    const { value } = event.target;
    setOrganizationName(value);
  };

  return (
    <>
    {console.log(props.form)}
      <div className="step3">
        <div className="step3__localization">
          <label htmlFor="localization">Lokalizacja</label>
          <select
            value={localizationSelect}
            name="localization"
            id="localization"
            onChange={setLocationHandler}
          >
            <option disabled selected value="">
              wybierz
            </option>
            <option value="Poznań">Poznań</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Kraków">Kraków</option>
            <option value="Wrocław">Wrocław</option>
            <option value="Katowice">Katowice</option>
          </select>
        </div>
        <div className="step3__needy">
          <label htmlFor="needy">Komu chcesz pomóc?</label>
          <div className="step3__needy__checkboxes">
            <div className="step3__needy__checkbox">
              <input type="checkbox" value={checkboxState1} />
              <span onClick={() => setCheckboxes(1)}>{helpGroupsLabels[0]}</span>
            </div>
            <div className="step3__needy__checkbox">
              <input type="checkbox" value={checkboxState2} />
              <span onClick={() => setCheckboxes(2)}>{helpGroupsLabels[1]}</span>
            </div>
            <div className="step3__needy__checkbox">
              <input type="checkbox" value={checkboxState3} />
              <span onClick={() => setCheckboxes(3)}>{helpGroupsLabels[2]}</span>
            </div>
            <div className="step3__needy__checkbox">
              <input type="checkbox" value={checkboxState4} />
              <span onClick={() => setCheckboxes(4)}>{helpGroupsLabels[3]}</span>
            </div>
            <div className="step3__needy__checkbox">
              <input type="checkbox" value={checkboxState5} />
              <span onClick={() => setCheckboxes(5)}>{helpGroupsLabels[4]}</span>
            </div>
          </div>
        </div>
        <div className="step3__organization">
          <label htmlFor="organization">
            Wpisz nazwę konkretnej organizacji (opcjonalnie)
          </label>
          <input
            type="text"
            onInput={setOrganizationHandler}
            value={organizationName}
          />
        </div>
        <div className="step3__btns">
          <button onClick={prevPageClickHandler}>Wstecz</button>
          <button
            onClick={nextPageClickHandler}
            disabled={(!checkCheckboxes(), !checkSelect())}
          >
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
  setStep3Data: (payload) => dispatch(setStep3Data(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
