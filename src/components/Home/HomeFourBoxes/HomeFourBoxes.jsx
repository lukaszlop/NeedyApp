import React from 'react';

const HomeFourBoxes = () => {
    return (
        <section className="four__boxes__wrapper">
            <div className="four__boxes__headline">
                <h2>Wystarczą 4 proste kroki</h2>
                <div className="four__boxes__headline__img"></div>
            </div>
            <div className="four__boxes__main">
              <div className="four__boxes__main__container">
                  <div className="four__boxes__box">
                      <h3>Wybierz rzeczy</h3>
                      <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                  </div>
                  <div className="four__boxes__box">
                      <h3>Spakuj je</h3>
                      <p>skorzystaj z<br/>worków na śmieci</p>
                  </div>
                  <div className="four__boxes__box">
                      <h3>Zdecyduj komu<br/>chcesz pomóc</h3>
                      <p>wybierz zaufane<br/>miejsce</p>
                  </div>
                  <div className="four__boxes__box">
                      <h3>Zamów kuriera</h3>
                      <p>kurier przyjedzie<br/>w dogodnym terminie</p>
                  </div>
              </div>
            </div>

        </section>
    );
}

export default HomeFourBoxes;
