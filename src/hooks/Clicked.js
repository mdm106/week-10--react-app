import React, { useState } from 'react';

const Clicked = () => {
    const [clicked, setClicked] = useState(false);

    const updateClicked = () => setClicked(true);

    return <p onClick={ updateClicked }>
        {!clicked ? "Not Clicked" : "Clicked"}
        </p>

}

export default Clicked;