import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, deleteBook } from '../redux/books/bookSlice';

const Book = ({ item }) => {
  const {
    title, author,
  } = item;
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(booksActions.removeBook(item.item_id));

    dispatch(deleteBook(item.item_id));
  };

  return (
    <div className="card">
      <section>
        <p className="category">Action</p>
        <h3 className="title">{title}</h3>
        <span className="author">
          By
          {author}
        </span>
        <div className="actions">
          <button type="button">comments</button>
          <button
            className="removeBtn"
            type="button"
            onClick={removeBookHandler}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </section>
      <div className="percentage">
        <div className="circle-wrap">
          <div className="inside-circle" />
          <div className="progress" />
        </div>
        <p>
          <span>0%</span>
          <br />
          <span>Completed</span>
        </p>
      </div>
      <div className="chapter">
        <p>
          <span>CURRENT CHAPTER</span>
          <span>Chapter 1</span>
          <button type="button">UPDATE PROGRESS</button>
        </p>
      </div>
    </div>
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
