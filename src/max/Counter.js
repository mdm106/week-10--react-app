import React from "react";

const Counter = ({ counter, handleClickPlus, handleClickMinus, highlight }) => (
    <div className={"mb-4" + (highlight ? " alert-warning" : "")} >
        <h5>Counter: {counter} </h5>
        <div className="d-flex flex-row">
            <button className="btn-lg btn-success mb-4" onClick={handleClickPlus}>+</button>
            <button className="btn-lg btn-danger mb-4" onClick={handleClickMinus}>-</button>
        </div>
    </div>
)

export default Counter;