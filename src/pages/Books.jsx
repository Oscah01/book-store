import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../component/Book';
import Form from '../component/Form';

const Books = () => {
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
