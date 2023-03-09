import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, deleteBook } from '../redux/books/bookSlice';

const Book = ({ item }) => {
  const { title, author } = item;
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(booksActions.removeBook(item.item_id));

    dispatch(deleteBook(item.item_id));
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
        <span>
          By
          {author}
        </span>
        <button type="button" onClick={removeBookHandler}>
          Remove
        </button>
      </div>
    </>
  );
};

Book.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
