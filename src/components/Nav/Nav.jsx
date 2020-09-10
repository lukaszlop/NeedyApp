import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Hamburger = (props) => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  const handleOnClick = () => {
    setActive(false);
  };

  return (
    <div className="hamburger__wrapper">
      <nav>
        <button
          className={!active ? "hamburger" : "hamburger hamburger--active"}
          onClick={toggleClass}
        >
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>
        <div
          className={!active ? "navigation" : "navigation navigation--active"}
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link onClick={handleOnClick} to="/" className="navigation__item__start">
                Start
              </Link>
            </li>
            <li className="navigation__item">
              <a href="">O co chodzi?</a>
            </li>
            <li className="navigation__item">
              <a href="">O nas</a>
            </li>
            <li className="navigation__item">
              <a href="">Fundacja i organizacje</a>
            </li>
            <li className="navigation__item">
              <Link onClick={handleOnClick} to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
          {props.user.email && (
            <ul className="navigation__list navigation__log">
              <li className="navigation__item ">
                <Link onClick={handleOnClick} to="/logowanie">
                  Jesteś zalogowany
                </Link>
              </li>
            </ul>
          )}
          {!props.user.email && (
            <ul className="navigation__list navigation__log">
              <li className="navigation__item ">
                <Link onClick={handleOnClick} to="/logowanie">
                  Zaloguj
                </Link>
              </li>
              <li className="navigation__item">
                <Link onClick={handleOnClick} to="/rejestracja" className="navigation__item--create">
                  Załóż konto
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Hamburger);
