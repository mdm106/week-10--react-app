import React, { useState } from 'react';

const Counter = ({ initial, max }) => {
    const [counter, setCounter] = useState(initial);

    const plusCounter = () => setCounter(counter < max ? counter + 1 : counter);

    const minusCounter = () => setCounter(counter > 0 ? counter - 1 : counter);

    return (
        <>
            <p>Counter: {counter} </p>
            <div className="d-flex flex-row">
                <button className="btn-success" onClick={ plusCounter }>+</button>
                <button className="btn-danger" onClick={ minusCounter }>-</button>
            </div>
        </>
    )

}

Counter.defaultProps = {
    initial: 50,
    max: 100
};

export default Counter;