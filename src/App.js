import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import './App.css';

import Challenges from './Challenges';
import Articles from './news/Articles';
import Article from './news/Article';
import CreateArticle from './news/CreateArticle';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Challenges } />
        <Route exact path="/news/create" component={ CreateArticle } />
        <Route exact path="/news" component={ Articles } />
        <Route path="/news/:id" render={ ({ match }) => ( 
          <Article articleID={ match.params.id } />
        ) } />
      </Switch>
    </Router>
  );
}

export default App;
