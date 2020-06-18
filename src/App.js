import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import './App.css';

import Challenges from './Challenges';
import Articles from './news/Articles';
import Article from './news/Article';
import CreateArticle from './news/CreateArticle';
import List from './ToDo/List';

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
        <Route exact path="/list" component={ List } />
      </Switch>
    </Router>
  );
}

export default App;
