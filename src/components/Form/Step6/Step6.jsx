import React from "react";

const Step6 = () => {
  
setTimeout(() => {
  window.location.href="/";
}, 5000);
console.log(window.location.href);
  return (
    <>
      <div className="step6">
        <h3>
          Dziękujemy za przesłanie formularza
          <br />
          Na maila prześlemy wszelkie informacje o odbiorze.
        </h3>
        <div className="step6__img"></div>
      </div>
    </>
  );
};

export default Step6;
