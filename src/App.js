import React from 'react';
import './App.css';

import Squares from './squares/Squares';
import SignUp from './signup/SignUp';
import Button from './button/Button';

function App() {
  return (
    <>
      <Squares />
      <SignUp />
      <Button handleUpdate={ console.log } />
    </>
  );
}

export default App;
