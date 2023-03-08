import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';
import AddBtn from './buttons/AddBtn';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const itemId = `item${uuidv4()}`;
    e.preventDefault();
    dispatch(addBook({ item_id: itemId, title, author }));
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Book Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <input
            type="text"
            id="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <AddBtn handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
