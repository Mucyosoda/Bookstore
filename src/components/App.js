import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booksec from './Homepage';
import Categoriessec from '../Redux/categories/categories';
import LinkPage from './Links';

const App = () => (
  <>
    <Router>
      <LinkPage />
      <Switch>
        <Route exact path="/">
          <Booksec />
        </Route>
        <Route exact path="/categories">
          <Categoriessec />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
