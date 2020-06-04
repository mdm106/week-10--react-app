import React, { useReducer } from 'react';

//initial state
const initial = {
    clicked: false,
};

//reducer functions
const buttonClicked = state => {
    return {
        ...state,
        clicked: true,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "BUTTON_CLICKED": return buttonClicked(state);
        default: return state;
    }
};

//the clicked component
const ClickedR = () => {
    //useReducer returns the *current* state
    // and a dispatch function
    const [ { clicked }, dispatch ] = useReducer(reducer, initial); 
    //double destructuring of state i.e. could have just put state as first value of duple and destructured state in next line
    
    return (
        <p onClick={ () => dispatch({ type: "BUTTON_CLICKED" }) }>
        {!clicked ? "Not Clicked" : "Clicked"}
        </p>
    );

}

export default ClickedR;