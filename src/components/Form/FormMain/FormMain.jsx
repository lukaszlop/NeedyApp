import React from "react";

const FormMain = () => {
  return (
    <>
      <section className="form__main">
        <div className="form__main__container">
          <div className="form__main__box">
            <h2>
              Oddaj rzeczy, których już nie chcesz
              
              POTRZEBUJĄCYM
            </h2>
            <div className="form__main__box__img"></div>
            <h3>Wystarczą 4 proste kroki:</h3>
            <div className="form__main__box__diamonds">
              <div className="form__main__box__diamond">
                <div>
                <p>
                  1<br />
                  <br />
                  Wybierz
                  <br />
                  rzeczy
                </p>
                </div>
              </div>
              <div className="form__main__box__diamond">
                <div>
                <p>
                  2<br />
                  <br />
                  Spakuj je
                  <br />w worki
                </p>
                </div>
              </div>
              <div className="form__main__box__diamond">
                <div>
                <p>
                  3<br />
                  <br />
                  Wybierz
                  <br />
                  fundację
                </p>
                </div>
              </div>
              <div className="form__main__box__diamond">
                <div>
                  <p>
                    4<br />
                    <br />
                    Zamów
                    <br />
                    kuriera
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormMain;
