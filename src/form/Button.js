import React from "react";

const Button = ({ handleSubmit }) => (
    <button className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}>Submit</button>
);

export default Button;