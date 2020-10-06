import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  validateEmail,
  emailErrorMessage,
  passwordErrorMessage,
} from "./Login.helpers";
import { logUser } from "./../../store/user/user.actions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState([false, ""]);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState([false, ""]);

  const emailHandler = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const passwordHandler = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const loginHandler = (event) => {
    const isEmailValid = validateEmail(email);
    isEmailValid
      ? setEmailError([false, ""])
      : setEmailError([true, emailErrorMessage]);
    const isPasswordValid = password.length > 5;
    isPasswordValid
      ? setPasswordError([false, ""])
      : setPasswordError([true, passwordErrorMessage]);

    if (isEmailValid && isPasswordValid) {
      props.logUser({ email });
    }
  };

  return (
    <>
      <section className="login__wrapper">
        <div className="login">
          <h2>Zaloguj się</h2>
          <div className="login__img"></div>
          <div className="login__box">
            <div>
              <label htmlFor="email" className="login__box__label__email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={emailHandler}
                className="login__box__input__email"
              />
              {emailError[0] && <p className="login__box__input__email--error">{emailError[1]}</p>}
            </div>
            <div>
              <label htmlFor="password" className="login__box__label__password">
                Hasło
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={passwordHandler}
                className="login__box__input__password"
              />
              {passwordError[0] && <p className="login__box__input__password--error">{passwordError[1]}</p>}
            </div>
          </div>
          <div className="login__btns">
            <Link className="login__btn--create" to={"/rejestracja"}>Załóż konto</Link>
            <Link to="/" className="login__btn--login" onClick={loginHandler}>
              Zaloguj się
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logUser: (user) => dispatch(logUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
