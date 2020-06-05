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
import StepCounter from './hooks/StepCounter';
import CatchMeIfYouCan from './hooks/CatchMeifYouCan';
import RollCall from './hooks/RollCall';
import PasswordStrength from './hooks/PasswordStrength';
import TempConverter from './hooks/TempConverter';
import List from './hooks/List';
import ClickedR from './reducers/ClickedR';
import StepCounterR from './reducers/StepCounterR';
import TempConverterR from './reducers/TempConverterR';

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
        <StepCounter />
        <CatchMeIfYouCan />
        <RollCall />
        <PasswordStrength />
        <TempConverter />
        <List />
        <ClickedR />
        <StepCounterR />
        <TempConverterR />
    </>
  );
}

export default Challenges;