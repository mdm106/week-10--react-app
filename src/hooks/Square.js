import React, { useState } from 'react';

const Square = ({ colour }) => {
    const [toggle, setToggle] = useState(true);

    const updateToggle = () => setToggle(!toggle);

    return <div className="mb-4"
                onClick={ updateToggle }
                style={{ width: 200,
                         height: 200,
                         backgroundColor: toggle ? "green" : colour}}>
           </div>;

}

Square.defaultProps = {
    colour: "hotpink"
};

export default Square;