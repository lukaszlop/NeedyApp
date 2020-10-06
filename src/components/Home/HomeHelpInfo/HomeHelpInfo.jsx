import React, { useState } from "react";
import "../../../scss/settings/_colors.scss";

const HomeHelpInfo = () => {
  const [index, setIndex] = useState(0);
  const [fundPage, setFundPage] = useState(0);
  const [organizationPage, setOrganizationPage] = useState(0);

  return (
    <section className="home__help__wrapper" id="help__info">
      <h2 className="home__help__headline">Komu pomagamy?</h2>
      <div className="home__help__img"></div>
      <div className="home__help__btns">
        <button
          onClick={() => setIndex(0)}
          style={
            index === 0 ? { border: "1px solid #3C3C3C" } : { border: "none" }
          }
        >
          Fundacjom
        </button>
        <button
          onClick={() => setIndex(1)}
          style={
            index === 1 ? { border: "1px solid #3C3C3C" } : { border: "none" }
          }
        >
          Organizacjom
          <br />
          pozarządowym
        </button>
        <button
          onClick={() => setIndex(2)}
          style={
            index === 2 ? { border: "1px solid #3C3C3C" } : { border: "none" }
          }
        >
          Lokalnym
          <br />
          zbiórkom
        </button>
      </div>
      {index === 0 && (
        <>
          <p className="home__help__text">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
          {fundPage === 0 && (
            <>
              <div className="home__help__line">
                <div className="home__help__line--left">
                  <h3>Fundacja "Dbam o Zdrowie"</h3>
                  <p>
                    Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                    życiowej.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
              </div>
              <div className="home__help__line home__help__line__border">
                <div className="home__help__line--left">
                  <h3>Fundacja “Dla dzieci”</h3>
                  <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <div className="home__help__line--right">
                  <p>ubrania, meble, zabawki</p>
                </div>
              </div>
              <div className="home__help__line">
                <div className="home__help__line--left">
                  <h3>Fundacja “Bez domu”</h3>
                  <p>
                    Cel i misja: Pomoc dla osób nie posiadających miejsca
                    zamieszkania.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
              </div>
              <div className="home__help__pages">
                <button
                  onClick={() => setFundPage(0)}
                  style={
                    fundPage === 0
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                >
                  1
                </button>
                <button
                  style={
                    fundPage === 1
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                  onClick={() => setFundPage(1)}
                >
                  2
                </button>
                <button
                  style={
                    fundPage === 2
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                  onClick={() => setFundPage(2)}
                >
                  3
                </button>
              </div>
            </>
          )}
          {fundPage === 1 && (
            <>
              <div className="home__help__line">
                <div className="home__help__line--left">
                  <h3>Fundacja "Lorem ipsum 4"</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="home__help__line home__help__line__border">
                <div className="home__help__line--left">
                  <h3>Fundacja “Lorem ipsum 5”</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ea?</p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem, ipsum dolor.
                  </p>
                </div>
              </div>
              <div className="home__help__line">
                <div className="home__help__line--left">
                  <h3>Fundacja “Lorem ipsum 6”</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div className="home__help__pages">
                <button
                  onClick={() => setFundPage(0)}
                  style={
                    fundPage === 0
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                >
                  1
                </button>
                <button
                  style={
                    fundPage === 1
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                  onClick={() => setFundPage(1)}
                >
                  2
                </button>
                <button
                  style={
                    fundPage === 2
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                  onClick={() => setFundPage(2)}
                >
                  3
                </button>
              </div>
            </>
          )}
          {fundPage === 2 && (
            <>
              <div className="home__help__line">
                <div className="home__help__line--left">
                  <h3>Fundacja "Lorem 7"</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div className="home__help__line home__help__line__border">
                <div className="home__help__line--left">
                  <h3>Fundacja “Lorem 8”</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem, ipsum dolor.</p>
                </div>
              </div>
              <div className="home__help__line">
                <div className="home__help__line--left">
                  <h3>Fundacja “Lorem 9”</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatum!
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="home__help__pages">
                <button
                  onClick={() => setFundPage(0)}
                  style={
                    fundPage === 0
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                >
                  1
                </button>
                <button
                  style={
                    fundPage === 1
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                  onClick={() => setFundPage(1)}
                >
                  2
                </button>
                <button
                  style={
                    fundPage === 2
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                  onClick={() => setFundPage(2)}
                >
                  3
                </button>
              </div>
            </>
          )}
        </>
      )}
      {index === 1 && (
        <>
          <p className="home__help__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          {organizationPage === 0 && (
            <>
              <div className="home__help__line ">
                <div className="home__help__line--left">
                  <h3>Organizacja “Lorem Ipsum 1”</h3>
                  <p>
                    Quis varius quam quisque id diam vel quam elementum
                    pulvinar.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>Egestas, sed, tempus</p>
                </div>
              </div>
              <div className="home__help__line home__help__line__border">
                <div className="home__help__line--left">
                  <h3>Organizacja “Lorem Ipsum 2”</h3>
                  <p>
                    Hendrerit gravida rutrum quisque non tellus orci ac auctor
                    augue.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>Ut, aliquam, purus, sit, amet</p>
                </div>
              </div>
              <div className="home__help__line">
                <div className="home__help__line--left">
                  <h3>Organizacja “Lorem Ipsum 3”</h3>
                  <p>Scelerisque in dictum non consectetur a erat nam.</p>
                </div>
                <div className="home__help__line--right">
                  <p>Mi, quis, hendrerit, dolor</p>
                </div>
              </div>
              <div className="home__help__pages">
                <button
                  onClick={() => setOrganizationPage(0)}
                  style={
                    organizationPage === 0
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                >
                  1
                </button>
                <button
                  style={
                    organizationPage === 1
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                  onClick={() => setOrganizationPage(1)}
                >
                  2
                </button>
              </div>
            </>
          )}
          {organizationPage === 1 && (
            <>
              <div className="home__help__line ">
                <div className="home__help__line--left">
                  <h3>Organizacja “Lorem 4”</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem, ipsum dolor.</p>
                </div>
              </div>
              <div className="home__help__line home__help__line__border">
                <div className="home__help__line--left">
                  <h3>Organizacja “Lorem 5”</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="home__help__line">
                <div className="home__help__line--left">
                  <h3>Organizacja “Lorem 6”</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="home__help__line--right">
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div className="home__help__pages">
                <button
                  onClick={() => setOrganizationPage(0)}
                  style={
                    organizationPage === 0
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                >
                  1
                </button>
                <button
                  style={
                    organizationPage === 1
                      ? { border: "1px solid #3C3C3C" }
                      : { border: "none" }
                  }
                  onClick={() => setOrganizationPage(1)}
                >
                  2
                </button>
              </div>
            </>
          )}
        </>
      )}
      {index === 2 && (
        <>
          <p className="home__help__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="home__help__line ">
            <div className="home__help__line--left">
              <h3>Zbiórka “Lorem Ipsum 1”</h3>
              <p>
                Quis varius quam quisque id diam vel quam elementum pulvinar.
              </p>
            </div>
            <div className="home__help__line--right">
              <p>Egestas, sed, tempus</p>
            </div>
          </div>
          <div className="home__help__line home__help__line__border">
            <div className="home__help__line--left">
              <h3>Zbiórka “Lorem Ipsum 2”</h3>
              <p>
                Hendrerit gravida rutrum quisque non tellus orci ac auctor
                augue.
              </p>
            </div>
            <div className="home__help__line--right">
              <p>Ut, aliquam, purus, sit, amet</p>
            </div>
          </div>
          <div className="home__help__line">
            <div className="home__help__line--left">
              <h3>Zbiórka “Lorem Ipsum 3”</h3>
              <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
            <div className="home__help__line--right">
              <p>Mi, quis, hendrerit, dolor</p>
            </div>
          </div>
          <div className="home__help__pages">
                <button style={{border: "none", cursor: "inherit"}}>      
                </button>
              </div>
        </>
      )}
    </section>
  );
};

export default HomeHelpInfo;
