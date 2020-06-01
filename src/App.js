import React from 'react';
import './App.css';

import Squares from './squares/Squares';
import SignUp from './signup/SignUp';
import Button from './button/Button';
import Form from './form/Form';

function App() {
  return (
    <>
      <Squares />
      <SignUp />
      <Button handleUpdate={ console.log } />
      <Form handleSubmit={ console.log } />
    </>
  );
}

export default App;
