import React, { useState, useReducer } from "react";
import reducer from './reducer';

// initial state
// put in some dummy content to start with
const initialState = {
  items: [],
};

// component
const List = () => {
  // setup reducer
  
  // get items from state
  const [{ items }, dispatch] = useReducer(reducer, initialState);

  // controlled component stuff
  // keep track of input value
  // easier to keep out of reducer
  const [input, setInput] = useState("");

  // update input state
  const handleInput = (e) => {
    setInput(e.currentTarget.value);
  };

  //handleSubmit will edit if clicked = true i.e. if a 
  const handleSubmit = (e) => {
      e.preventDefault();
      if(clicked) {
          setInput("");
          setClicked(false);
          dispatch({type: "CHANGE_ITEM", index: clickedIndex, value: input});
      } else {
        setInput("");
        dispatch({type: "NEW_ITEM", value: input})
      }
      
  }

  const handleEdit = (e, index) => {
      e.preventDefault();
      updateClicked();
      updateIndex(index);
  }
  //to set state as being a clicked edit button and the index of that button
  const [clicked, setClicked] = useState(false);
  const [clickedIndex, setIndex] = useState("");

  const updateClicked = () => setClicked(!clicked);
  const updateIndex = (i) => setIndex(i);


  return (
    <div className="card">
      <form className="card-header" onSubmit={ handleSubmit }>
        { /* add task input */ }
        <input
          className="form-control"
          onChange={ handleInput }
          value={ input }
        />
      </form>

      <div className="card-body">
        { /* show items if there are any */ }
        { items.length === 0 ? <p className="card-text">No list items</p> : (
          <ul className="list-group list-group-flush">
            { items.map((item, index) => (
              <li
                key={ index }
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                { /* strike-through for completed items */ }
                <span
                  className="flex-grow-1"
                  style={ {
                    cursor: "pointer",
                    textDecoration: item.completed ? "line-through" : "",
                    border: clicked && clickedIndex === index ? "2px solid red" : "",
                  } }
                  onClick={ () => dispatch({type: "MARK_COMPLETED", index: index})}
                >{ item.task }</span>

                { /* edit button */ }
                <button class="btn btn-sm btn-primary mr-1" onClick={ (e) => handleEdit(e, index) }>Edit</button>

                { /* remove button */ }
                <button class="btn btn-sm btn-danger" onClick={ () => dispatch({ type: "REMOVE_ITEM", index: index }) }>&times;</button>
              </li>
            )) }
          </ul>
        )}
      </div>
    </div>
  );
};

export default List;