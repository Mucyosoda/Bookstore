import React from 'react';
import { Link } from 'react-router-dom';

const LinkPage = () => (
  <>
    <nav className="navigation-bar d-flex">
      <h1>React/Redux Bookstore</h1>
      <ul className="d-flex">
        <li>
          <Link to="/" exact> Books </Link>
        </li>
        <li>
          <Link to="/categories"> Categories </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default LinkPage;
