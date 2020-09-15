import React from "react";
import FormMain from "../Form/FormMain/FormMain";
import FormYellowBar from "../Form/FormYellowBar/FormYellowBar";
import HomeContactForm from "../Home/HomeContactForm/HomeContactForm";

const FormFirstPg = () => {
  return (
    <>
      <FormMain />
      <FormYellowBar text="Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."/>
      <h2>Form First Page</h2>
      <HomeContactForm />
    </>
  );
};

export default FormFirstPg;
