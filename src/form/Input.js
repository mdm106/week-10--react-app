import React from "react";

const Input = ({ field, type, input, handleChange }) => (
    <input className="form-control"
           id={field}
           name={field}
           type={type}
           value={ input }
           onChange={handleChange} />
);

export default Input;