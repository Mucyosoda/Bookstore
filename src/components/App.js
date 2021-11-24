import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Booksec from '../Redux/books/books';
import CategoriesPage from '../Redux/categories/categories';
import Nav from './NavBar';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Booksec />
      </Route>
      <Route exact path="/categories">
        <CategoriesPage />
      </Route>
    </Switch>
  </>
);

export default App;
