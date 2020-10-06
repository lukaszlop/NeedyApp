import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const HomeMain = (props) => {
  return (
    <>
      <section className="home__main" id="home__main">
        <div className="home__main__container">
          <div className="home__main__box">
            <h2>
              Zacznij pomagać!
              <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </h2>
            <div className="home__main__box__img"></div>
            <div className="home__main__box__btns">
              {props.user.email ? (
                <>
                  <Link to="/oddaj-rzeczy" className="home__main__box__btn">
                    oddaj
                    <br />
                    rzeczy
                  </Link>
                  <Link to="/oddaj-rzeczy" className="home__main__box__btn">
                    zorganizuj
                    <br />
                    zbiórkę
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/logowanie" className="home__main__box__btn">
                    oddaj
                    <br />
                    rzeczy
                  </Link>
                  <Link to="/logowanie" className="home__main__box__btn">
                    zorganizuj
                    <br />
                    zbiórkę
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomeMain);
