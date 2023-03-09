import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Navigation = () => (
  <>
    <header>
      <h1>Book Stores </h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
      <IoIosPerson className="icon" />
    </header>
  </>
);

export default Navigation;
