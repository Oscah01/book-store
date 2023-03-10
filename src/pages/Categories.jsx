import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
