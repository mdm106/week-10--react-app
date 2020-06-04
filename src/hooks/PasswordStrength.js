import React, { useState } from 'react';

const setColour = (length) => {
    if (length === 0) {
        return "none"
    }

    if(length < 9) {
        return "red"
    }

    if(length < 16) {
        return "orange"
    }

    return "green"
}

const PasswordStrength = () => {
    const [input, setInput] = useState("");

    const updateInput = (e) => setInput( e.currentTarget.value )
    

    return (
        <form className="form-group">
            <label>Password:
            <input
            value={ input }
            onChange={ updateInput }
            type={"password"}
            style={{backgroundColor: setColour(input.length)}}
            />
            </label>
        </form>
    )

}


export default PasswordStrength;