// import React, { Component } from "react";
import React from "react";

const Password = ({ label, value, passed, handleChange }) => (
        <label>{ label }
            <input
            value={ value }
            onChange={ handleChange }
            type={"password"}
            className={"form-control " + (passed ? "is-valid" : "is-invalid")}
            />
        </label>
);

export default Password;