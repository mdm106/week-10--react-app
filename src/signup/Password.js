// import React, { Component } from "react";
import React from "react";

const Password = ({ label, value, passed, handleChange }) => (
        <label>{ label }
            <input
            value={ value }
            onChange={ handleChange }
            type={"password"}
            className={ passed ? "form-control is-valid" : "form-control is-invalid"}
            />
        </label>
);

export default Password;