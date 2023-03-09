import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { booksActions, postBook } from '../redux/books/bookSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) return;

    const bookData = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };

    dispatch(booksActions.addBook(bookData));
    dispatch(postBook(bookData));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-wrapper row">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={title}
          aria-label="Book title input"
          placeholder="Book Title"
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          name="author"
          value={author}
          aria-label="Book author input"
          placeholder="Author"
          onChange={authorChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
