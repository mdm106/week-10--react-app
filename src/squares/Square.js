import React from "react";

const Square = ({ colour, selected, handleClick }) => (
    <div className="mb-4" onClick={ handleClick } style={{ width: 200, height: 200, backgroundColor: selected ? "green" : colour}}>
    </div>
);

Square.defaultProps = {
    colour: "hotpink"
};

export default Square;