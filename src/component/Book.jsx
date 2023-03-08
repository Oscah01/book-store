import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RemoveBtn from './buttons/RemoveBtn';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <>
      <div>
        <section>
          <span>{item.author}</span>
          <span>{item.title}</span>
          <RemoveBtn onClick={() => handleDelete(item.item_id)} />
        </section>
      </div>
    </>
  );
};

export default Book;
Book.propTypes = { item: PropTypes.objectOf.isRequired };
