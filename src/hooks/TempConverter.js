import React, { useState } from 'react';

const toCelsius = (value) => {
    return (value-32) * 5/9;
}

const toFahrenheit = (value) => {
    return (value * (9/5))+32;
}

const TempConverter = () => {
    const [fahrenheit, setFahrenheit] = useState("32");

    const [celsius, setCelsius] = useState("0");

    const handleCelsius = (e) => {
        let input = +e.currentTarget.value;
        setFahrenheit(toFahrenheit(input).toFixed(2));
        setCelsius(`${input}`);
    };
         
    const handleFahrenheit = (e) => {
        let input = +e.currentTarget.value;
        setCelsius(toCelsius(input).toFixed(2));
        setFahrenheit(`${input}`);
    }

    return (
        <form className="form-group">
            <label>Fahrenheit:</label>
            <input
            value={ fahrenheit }
            onChange={ handleFahrenheit }
            type={"number"}
            />
            <label>Celsius:</label>
            <input
            value={ celsius }
            onChange={ handleCelsius }
            type={"number"}
            />
        </form>
    )

}


export default TempConverter;