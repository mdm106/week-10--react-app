import React, { useReducer } from 'react';

//the initial state
const initial = {
    counter: 0,
};


const StepCounterR = ({ max, step }) => {
    //reducer functions
    const plusCounter = state => {
        let newCount = state.counter + step;
        return {
            ...state,
            counter: newCount <= max ? newCount : state.counter,
        }
    };

    const minusCounter = state => {
        let newCount = state.counter - step;
        return {
            ...state,
            counter: newCount >= 0 ? newCount : state.counter,
        }   
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "PLUS_CLICKED": return plusCounter(state);
            case "MINUS_CLICKED": return minusCounter(state);
            default: return state;
        }
    };

    //the StepCounter component
    const [ { counter }, dispatch] = useReducer(reducer, initial);

    return (
        <>
            <p>Counter: {counter} </p>
            <div className="d-flex flex-row">
                <button className="btn-success" onClick={ () => dispatch({ type: "PLUS_CLICKED" }) }>+</button>
                <button className="btn-danger" onClick={ () => dispatch({ type: "MINUS_CLICKED" }) }>-</button>
            </div>
        </>
    )
    
    };

StepCounterR.defaultProps = {
    max: 100,
    step: 5
};

export default StepCounterR;