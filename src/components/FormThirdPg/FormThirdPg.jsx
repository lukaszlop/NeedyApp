import React from "react";
import FormMain from "../Form/FormMain/FormMain";
import FormYellowBar from "../Form/FormYellowBar/FormYellowBar";
import HomeContactForm from "../Home/HomeContactForm/HomeContactForm";

const FormThirdPg = () => {
  return (
    <>
      <FormMain />
      <FormYellowBar text="Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."/>
      <h2>Form Third Page</h2>
      <HomeContactForm />
    </>
  );
};

export default FormThirdPg;
