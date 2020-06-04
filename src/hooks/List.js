import React, { useState } from 'react';

const List = () => {
    const [input, setInput] = useState("");

    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setInput(e.currentTarget.value);
    };
         
    const handleClick = (e) => {
        setItems([...items, input]); //square brackets to ensure items is an array
        setInput(""); //resets input when the button is clicked
    }

    return(
        <>  
            <input
                value={ input }
                onChange={ handleChange }
                type="text"
                className="mb-1"
            />
            <button className="btn-primary" onClick={ handleClick }>
                Add Item
            </button>
            <ul>
                {items.map((item, index) => (
                    <li key= { index }>
                        { item }
                    </li>
                ))}
            </ul>
        </>
    )

}


export default List;