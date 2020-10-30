import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setIsRedirectFromHomeView } from "../../../store/appConfig/appConfig.actions";

const HomeFourBoxes = ({auth}) => {
  
  return (
    <section className="four__boxes__wrapper" id="four__boxes">
      <div className="four__boxes__headline">
        <h2>Wystarczą 4 proste kroki</h2>
        <div className="four__boxes__headline__img"></div>
      </div>
      <div className="four__boxes__main">
        <div className="four__boxes__main__container">
          <div className="four__boxes__box">
            <div className="four__boxes__box__icon--first"></div>
            <h3>Wybierz rzeczy</h3>
            <div className="four__boxes__box__line"></div>
            <p>
              ubrania, zabawki,
              <br />
              sprzęt i inne
            </p>
          </div>
          <div className="four__boxes__box">
            <div className="four__boxes__box__icon--second"></div>
            <h3>Spakuj je</h3>
            <div className="four__boxes__box__line"></div>
            <p>
              skorzystaj z<br />
              worków na śmieci
            </p>
          </div>
          <div className="four__boxes__box">
            <div className="four__boxes__box__icon--third"></div>
            <h3>
              Zdecyduj komu
              <br />
              chcesz pomóc
            </h3>
            <div className="four__boxes__box__line"></div>
            <p>
              wybierz zaufane
              <br />
              miejsce
            </p>
          </div>
          <div className="four__boxes__box">
            <div className="four__boxes__box__icon--fourth"></div>
            <h3>Zamów kuriera</h3>
            <div className="four__boxes__box__line"></div>
            <p>
              kurier przyjedzie
              <br />w dogodnym terminie
            </p>
          </div>
        </div>
      </div>
      <div className="four__boxes__btn__box">
        {auth.email ? (
          <>
            <Link to="/oddaj-rzeczy" className="four__boxes__btn">
              oddaj
              <br />
              rzeczy
            </Link>
          </>
        ) : (
          <>
            <Link to="/logowanie" className="four__boxes__btn">
              oddaj
              <br />
              rzeczy
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  setIsRedirectFromHomeView: (isRedirect) =>
    dispatch(setIsRedirectFromHomeView(isRedirect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFourBoxes);
