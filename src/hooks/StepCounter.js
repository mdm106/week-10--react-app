import React, { useState } from 'react';

const StepCounter = ({ max, step }) => {
    const [counter, setCounter] = useState(0);

    const plusCounter = () => {
        let newCount = counter + step;
        setCounter(newCount <= max ? newCount : counter)
    }

    const minusCounter = () => {
        let newCount = counter - step;
        setCounter(newCount >= 0 ? newCount : counter);
    }

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

StepCounter.defaultProps = {
    max: 100,
    step: 5
};

export default StepCounter;