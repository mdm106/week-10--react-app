import React from 'react';

import './App.css';

import Squares from './squares/Squares';
import SignUp from './signup/SignUp';
import Button from './button/Button';
import Max from './max/Max';
import Form from './form/Form';
import FormTwo from './form/FormTwo';
import Clicked from './hooks/Clicked';
import Square from './hooks/Square';
import ToggleText from './hooks/ToggleText';
import Counter from './hooks/Counter';

const Challenges = () => {
  return (
    <>
        <Squares />
        <SignUp />
        <Max />
        <Button handleUpdate={ console.log } />
        <Form handleSubmit={ console.log } />
        <FormTwo handleSubmit={ console.log } />
        <Clicked />
        <Square />
        <ToggleText />
        <Counter />
    </>
  );
}

export default Challenges;