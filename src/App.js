import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';

import Challenges from './Challenges';
import Articles from './news/Articles';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={ Challenges } />
        <Route exact path="/news" component={ Articles } />
      </>
    </Router>
  );
}

export default App;
