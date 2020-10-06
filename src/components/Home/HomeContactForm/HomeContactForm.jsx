import React, { useState } from "react";
import {
  validateEmail,
  validateName,
  emailErrorMessage,
  nameErrorMessage,
  messageErrorMessage,
  validateFormMessage1,
  validateFormMessage2,
} from "../../Login/Login.helpers";

const HomeContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState([false, ""]);
  const [nameError, setNameError] = useState([false, ""]);
  const [messageError, setMessageError] = useState([false, ""]);
  const [validFormMessage, setValidFormMessage] = useState([false, "", ""]);

  const sendHandler = (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    isEmailValid
      ? setEmailError([false, ""])
      : setEmailError([true, emailErrorMessage]);
    const isNameValid = validateName(name);
    isNameValid
      ? setNameError([false, ""])
      : setNameError([true, nameErrorMessage]);
    const isMessageValid = message.length >= 120;
    isMessageValid
      ? setMessageError([false, ""])
      : setMessageError([true, messageErrorMessage]);
    if (isEmailValid && isNameValid && isMessageValid) {
      setValidFormMessage([true, validateFormMessage1, validateFormMessage2]);

      fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            setEmail("");
            setName("");
            setMessage("");
            setTimeout(() => {
              setValidFormMessage([false, "", ""]);
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <section className="contact__form__wrapper" id="contact__form">
        <div className="contact__form">
          <form action="">
            <h2>Skontaktuj się z nami</h2>
            <div className="contact__form__img"></div>
            {validFormMessage[0] && (
              <>
                <p style={{ color: "green", textAlign: "center" }}>
                  {validFormMessage[1]}
                </p>
                <p style={{ color: "green", textAlign: "center" }}>
                  {validFormMessage[2]}
                </p>
              </>
            )}
            <div className="contact__form__box">
              <div className="contact__form__name">
                <label htmlFor="name">Wpisz swoje imię</label>
                <input
                  value={name}
                  onInput={(event) => setName(event.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="imię użytkownika"
                  style={
                    nameError[0] === true
                      ? { borderBottom: "2px solid red" }
                      : null
                  }
                />
                {nameError[0] && (
                  <p
                    style={{ color: "red" }}
                    className="contact__form__name--error"
                  >
                    {nameError[1]}
                  </p>
                )}
              </div>
              <div className="contact__form__email">
                <label htmlFor="email">Wpisz swój email</label>
                <input
                  value={email}
                  onInput={(event) => setEmail(event.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="adres email"
                  style={
                    emailError[0] === true
                      ? { borderBottom: "2px solid red" }
                      : null
                  }
                />
                {emailError[0] && (
                  <p
                    style={{ color: "red" }}
                    className="contact__form__email--error"
                  >
                    {emailError[1]}
                  </p>
                )}
              </div>
            </div>
            <div className="contact__form__message">
              <label htmlFor="message">Wpisz swoją wiadomość</label>
              <textarea
                value={message}
                onInput={(event) => setMessage(event.target.value)}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="treść wiadomości..."
                style={
                  messageError[0] === true
                    ? { borderBottom: "2px solid red" }
                    : null
                }
              ></textarea>
              {messageError[0] && (
                <p
                  style={{ color: "red" }}
                  className="contact__form__message--error"
                >
                  {messageError[1]}
                </p>
              )}
            </div>
            <button type="submit" onClick={sendHandler}>
              Wyślij
            </button>
          </form>
        </div>
        <footer className="contact__form__footer">
          <p className="contact__form__footer__text">Copyright by Coders Lab</p>
          <div className="contact__form__footer__icons">
            <a
              href="https://www.facebook.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <i className="fab fa-facebook-square"></i>
            </a>

            <a
              href="https://www.instagram.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default HomeContactForm;
