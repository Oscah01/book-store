import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../component/Book';
import Form from '../component/Form';
import { getBooks } from '../redux/books/bookSlice';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booklists = useSelector((state) => state.books.books);
  return (
    <div>
      <div>
        {booklists.map((item) => (
          <Book key={item.item_id} item={item} />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
