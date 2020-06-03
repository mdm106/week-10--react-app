import React, { useState } from 'react';

const ToggleText = ({ initial, alternate }) => {
    const [toggle, setToggle] = useState(true);

    const updateToggle = () => setToggle(!toggle);

    return (
        <>
            <p>
                {toggle ? initial : alternate}
            </p>
            <button className="btn-primary mb-4" onClick={ updateToggle }>
                Toggle
            </button>
        </>
    )

}

ToggleText.defaultProps = {
    initial: "Hello",
    alternate: "World"
};

export default ToggleText;