import React from "react";

const Label = ({ label }) => (
    <label htmlFor={label} style={{textTransform: "capitalize"}}>{label}</label>
);

export default Label;