import React from "react";

const HomeContactForm = () => {
  return (
    <>
      <section className="contact__form__wrapper">
        <div className="contact__form">
          <form action="">
            <h2>Skontaktuj się z nami</h2>
            <div className="contact__form__img"></div>
            <div className="contact__form__box">
              <div className="contact__form__name">
                <label htmlFor=""></label>
                <input type="text" />
              </div>
              <div className="contact__form__email">
                <label htmlFor=""></label>
                <input type="text" />
              </div>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </form>
          <button type="submit">Wyślij</button>
        </div>
        <div className="contact__form__bg__img"></div>
      </section>
    </>
    
  );
};

export default HomeContactForm;
