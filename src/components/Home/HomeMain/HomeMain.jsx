import React from "react";

const HomeMain = () => {
  return (
    <>
      <section className="home__main">
        <div className="home__main__container">
          <div className="home__main__box">
            <h2>
              Zacznij pomagać!
              <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </h2>
            <div className="home__main__box__img"></div>
            <div className="home__main__box__btns">
              <button>
                oddaj
                <br />
                rzeczy
              </button>
              <button>
                zorganizuj
                <br />
                zbiórkę
              </button>
            </div>
          </div>
          <div className="home__main__wrapper">
            <div className="home__main__img"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMain;
