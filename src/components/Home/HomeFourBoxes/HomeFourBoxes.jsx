import React from "react";

const HomeFourBoxes = () => {
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
      <div className="four__boxes__btn">
        <button>oddaj<br/>rzeczy</button>
      </div>
    </section>
  );
};

export default HomeFourBoxes;
