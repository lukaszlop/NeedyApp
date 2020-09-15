import React from 'react';

const FormYellowBar = (props) => {
    return (
        <>
        <section className="form__yellow__bar">
            <div className="form__yellow__bar__text">
                <h2>Ważne</h2>
                <p>{props.text}</p>
            </div>
        </section>
        </>
    );
}

export default FormYellowBar;
