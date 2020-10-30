import React, { useEffect, useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Link as ScrollLink } from "react-scroll";
import firebase from "firebase";

const Hamburger = ({ auth }) => {
  const [active, setActive] = useState(false);
  const [redirect, setRedirect] = useState(false);

  let location = useLocation();
  const isInMainViewFunc = () => {
    const { pathname } = location;
    return pathname === "" || pathname === "/";
  };
  const [isInMainView, setIsInMainView] = useState(isInMainViewFunc());

  useEffect(() => {
    setIsInMainView(isInMainViewFunc());
  }, [location]);

  const toggleClass = () => {
    setActive(!active);
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setRedirect(true);
      });
    setActive(false);
  };

  return (
    <div className="hamburger__wrapper">
      <nav>
        <div className="hamburger__button__wrapper">
        <button
          className={!active ? "hamburger" : "hamburger hamburger--active"}
          onClick={toggleClass}
        >
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>
        </div>
        <div
          className={!active ? "navigation" : "navigation navigation--active"}
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              {isInMainView ? (
                <ScrollLink
                to="home__main"
                smooth={true}
                style={{ cursor: "pointer" }}
                onClick={toggleClass}
              >
                Start
              </ScrollLink>
              ) : (
                <Link to="/" className="navigation__item__start" onClick={toggleClass}>
                Start
              </Link>
              )}
            </li>
            <li className="navigation__item">
              {isInMainView ? (
                <ScrollLink
                  to="four__boxes"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  onClick={toggleClass}
                >
                  O co chodzi?
                </ScrollLink>
              ) : (
                <Link to="/" style={{ cursor: "pointer" }} onClick={toggleClass}>
                  O co chodzi?
                </Link>
              )}
            </li>
            <li className="navigation__item">
              {isInMainView ? (
                <ScrollLink
                  to="about__us"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  onClick={toggleClass}
                >
                  O nas
                </ScrollLink>
              ) : (
                <Link to="/" style={{ cursor: "pointer" }} onClick={toggleClass}>
                  O nas
                </Link>
              )}
            </li>
            <li className="navigation__item">
              {isInMainView ? (
                <ScrollLink
                  to="help__info"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  onClick={toggleClass}
                >
                  Fundacja i organizacje
                </ScrollLink>
              ) : (
                <Link to="/" style={{ cursor: "pointer" }} onClick={toggleClass}>
                  Fundacja i organizacje
                </Link>
              )}
            </li>
            <li className="navigation__item">
              {isInMainView ? (
                <ScrollLink
                  to="contact__form"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  onClick={toggleClass}
                >
                  Kontakt
                </ScrollLink>
              ) : (
                <Link to="/" style={{ cursor: "pointer" }} onClick={toggleClass}>
                  Kontakt
                </Link>
              )}
            </li>
          </ul>
          {auth.email && (
            <ul className="navigation__list navigation__log">
              <li className="navigation__item ">
                <p className="navigation__item--welcome">
                  Cześć <span style={{ fontWeight: "bold" }}>{auth.email}</span>
                </p>
              </li>
              <li className="navigation__item">
                <Link
                  to="/oddaj-rzeczy"
                  className="navigation__item--share-things"
                  onClick={toggleClass}
                >
                  Oddaj rzeczy
                </Link>
              </li>
              <li className="navigation__item">
                <button
                  onClick={handleSignOut}
                  className="navigation__item--logout"
                >
                  Wyloguj
                </button>
              </li>
            </ul>
          )}
          {!auth.email && (
            <ul className="navigation__list navigation__log">
              <li className="navigation__item ">
                <Link to="/logowanie" onClick={toggleClass}>Zaloguj</Link>
              </li>
              <li className="navigation__item">
                <Link to="/rejestracja" className="navigation__item--create" onClick={toggleClass}>
                  Załóż konto
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      {redirect && <Redirect to="/wylogowano" />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(Hamburger);
