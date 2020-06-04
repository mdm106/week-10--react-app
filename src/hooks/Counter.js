import React, { useState } from 'react';

const Counter = ({ initial, max }) => {
    const [counter, setCounter] = useState(initial);

    const handlePlus = () => setCounter(counter < max ? counter + 1 : counter); //event handler

    const handleMinus = () => setCounter(counter > 0 ? counter - 1 : counter); //event handler

    return (
        <>
            <p>Counter: {counter} </p>
            <div className="d-flex flex-row">
                <button className="btn-success" onClick={ handlePlus }>+</button>
                <button className="btn-danger" onClick={ handleMinus }>-</button>
            </div>
        </>
    )

}

Counter.defaultProps = {
    initial: 50,
    max: 100
};

export default Counter;