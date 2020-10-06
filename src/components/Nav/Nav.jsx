import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Link as ScrollLink } from "react-scroll";

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
              <Link
                onClick={handleOnClick}
                to="/"
                className="navigation__item__start"
              >
                Start
              </Link>
            </li>
            <li className="navigation__item">
              <ScrollLink to="four__boxes" smooth={true} style={{cursor: "pointer"}}>O co chodzi?</ScrollLink>
            </li>
            <li className="navigation__item">
              <ScrollLink to="about__us" smooth={true} style={{cursor: "pointer"}}>O nas</ScrollLink>
            </li>
            <li className="navigation__item">
              <ScrollLink to="help__info" smooth={true} style={{cursor: "pointer"}}>Fundacja i organizacje</ScrollLink>
            </li>
            <li className="navigation__item">
              <ScrollLink to="contact__form" smooth={true} style={{cursor: "pointer"}}>
                Kontakt
              </ScrollLink>
            </li>
          </ul>
          {props.user.email && (
            <ul className="navigation__list navigation__log">
              <li className="navigation__item ">
                <p className="navigation__item--welcome">Cześć <span style={{fontWeight: "bold"}}>{props.user.email}</span></p>
              </li>
              <li className="navigation__item">
                <Link
                  onClick={handleOnClick}
                  to="/oddaj-rzeczy"
                  className="navigation__item--share-things"
                >
                  Oddaj rzeczy
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  onClick={handleOnClick}
                  to="/wylogowano"
                  className="navigation__item--logout">
                  Wyloguj
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
                <Link
                  onClick={handleOnClick}
                  to="/rejestracja"
                  className="navigation__item--create"
                >
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
