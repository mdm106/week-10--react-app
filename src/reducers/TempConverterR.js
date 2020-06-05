import React, { useReducer } from 'react';

//initial state
const initial = {
    fahrenheit: "32",
    celsius: "0",
};

// conversion functions
const toCelsius = (value) => {
    return (value-32) * 5/9;
};

const toFahrenheit = (value) => {
    return (value * (9/5))+32;
};

const TempConverterR = () => {

    //reducer functions
    const handleCelsius = (state, value) => {
        return {
            ...state,
            fahrenheit: toFahrenheit(+value).toFixed(2),
            celsius: `${value}`,
        }
    };

    const handleFahrenheit = (state, value) => {
        return {
            ...state,
            celsius: toCelsius(+value).toFixed(2),
            fahrenheit: `${value}`,
        }
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "CELSIUS_CHANGE": return handleCelsius(state, action.value);
            case "FAHRENHEIT_CHANGE": return handleFahrenheit(state, action.value);
            default: return state;
        }
    };

    const [{ fahrenheit, celsius}, dispatch] = useReducer(reducer, initial);

    return (
        <form className="form-group">
            <label>Fahrenheit:</label>
            <input
            value={ fahrenheit }
            onChange={ (e) => dispatch({ type: "FAHRENHEIT_CHANGE", value: e.target.value}) }
            type={"number"}
            />
            <label>Celsius:</label>
            <input
            value={ celsius }
            onChange={ (e) => dispatch({ type: "CELSIUS_CHANGE", value: e.target.value}) }
            type={"number"}
            />
        </form>
    )

};


export default TempConverterR;