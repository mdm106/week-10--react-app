import React from 'react';

import './App.css';

import Squares from './squares/Squares';
import SignUp from './signup/SignUp';
import Button from './button/Button';
import Max from './max/Max';
import Form from './form/Form';
import FormTwo from './form/FormTwo';

const Challenges = () => {
  return (
    <>
        <Squares />
        <SignUp />
        <Max />
        <Button handleUpdate={ console.log } />
        <Form handleSubmit={ console.log } />
        <FormTwo handleSubmit={ console.log } />
    </>
  );
}

export default Challenges;