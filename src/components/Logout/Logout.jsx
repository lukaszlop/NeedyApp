import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <>
      <section className="logout__wrapper">
        <div className="logout">
          <h2>
            Wylogowanie nastąpiło
            <br />
            pomyślnie!
          </h2>
          <div className="logout__img"></div>
          <Link to="/" className="logout_btn">
            Strona główna
          </Link>
        </div>
      </section>
    </>
  );
};

export default Logout;
