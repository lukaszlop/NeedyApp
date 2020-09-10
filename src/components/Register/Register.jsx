import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  validateEmail,
  emailErrorMessage,
  passwordErrorMessage,
  passwordRepeatErrorMessage,
} from "../Login/Login.helpers";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState([false, ""]);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState([false, ""]);
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState([false, ""]);

  const emailHandler = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const passwordHandler = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const passwordRepeatHandler = (event) => {
      const {value} = event.target;
      setPasswordRepeat(value);
  }

  const registerHandler = (event) => {
    const isEmailValid = validateEmail(email);
    isEmailValid
      ? setEmailError([false, ""])
      : setEmailError([true, emailErrorMessage]);
    const isPasswordValid = password.length > 5;
    isPasswordValid
      ? setPasswordError([false, ""])
      : setPasswordError([true, passwordErrorMessage]);
    const isPasswordRepeatValid = passwordRepeat.length === password.length;
    isPasswordRepeatValid
      ? setPasswordRepeatError([false, ""])
      : setPasswordRepeatError([true, passwordRepeatErrorMessage]);
        

    if (isEmailValid && isPasswordValid && isPasswordRepeatValid) {
      props.logUser({ email });
    }
  };

  return (
    <>
      <section className="register__wrapper">
        <div className="register">
          <h2>Załóż konto</h2>
          <div className="register__img"></div>
          <div className="register__box">
            <div class="register__box__email">
              <label htmlFor="email" className="register__box__label__email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={emailHandler}
                className="register__box__input__email"
              />
              {emailError[0] && (
                <p className="register__box__input__email--error">
                  {emailError[1]}
                </p>
              )}
            </div>
            <div class="register__box__password">
              <label
                htmlFor="password"
                className="register__box__label__password"
              >
                Hasło
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={passwordHandler}
                className="register__box__input__password"
              />
              {passwordError[0] && <p className="register__box__input__password--error">{passwordError[1]}</p>}
            </div>
            <div class="register__box__password--repeat">
              <label
                htmlFor="password"
                className="register__box__label__password--repeat"
              >
                Powtórz hasło
              </label>
              <input
                type="password"
                name="password-repeat"
                id="password-repeat"
                value={passwordRepeat}
                onChange={passwordRepeatHandler}
                className="register__box__input__password--repeat"
              />
              {passwordRepeatError[0] && <p className="register__box__input__password--repeat--error">{passwordRepeatError[1]}</p>}
            </div>
          </div>
          <div className="register__btns">
            <Link className="register__btn--login" to={"/logowanie"}>
              Zaloguj się
            </Link>
            <button className="register__btn--create" onClick={registerHandler}>Załóż konto</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
