import React from 'react';
import PropTypes from 'prop-types';

const AddBtn = ({ handleSubmit }) => (
  <button onClick={handleSubmit} type="submit">
    Add book
  </button>
);

export default AddBtn;
AddBtn.propTypes = { handleSubmit: PropTypes.func.isRequired };
