import React from "react";

const HomeContactForm = () => {
  return (
    <>
      <section className="contact__form__wrapper" id="contact__form">
        <div className="contact__form">
          <form action="">
            <h2>Skontaktuj się z nami</h2>
            <div className="contact__form__img"></div>
            <div className="contact__form__box">
              <div className="contact__form__name">
                <label htmlFor="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Imię Użytkownika"
                />
              </div>
              <div className="contact__form__email">
                <label htmlFor="email">Wpisz swój email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="adres@email.com"
                />
              </div>
            </div>
            <div className="contact__form__message">
              <label htmlFor="message">Wpisz swoją wiadomość</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ></textarea>
            </div>
            <button type="submit">Wyślij</button>
          </form>
        </div>
        <footer className="contact__form__footer">
          <p className="contact__form__footer__text">Copyright by Coders Lab</p>
          <div className="contact__form__footer__icons">
            <i class="fab fa-facebook-square"><a href=""></a></i>
            <i class="fab fa-instagram"><a href=""></a></i>
          </div>
        </footer>
      </section>
    </>
  );
};

export default HomeContactForm;
