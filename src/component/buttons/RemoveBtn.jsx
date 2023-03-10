import React from 'react';
import PropTypes from 'prop-types';

const RemoveBtn = ({ onClick }) => (
  <button onClick={onClick} type="button">
    remove
  </button>
);

export default RemoveBtn;
RemoveBtn.propTypes = { onClick: PropTypes.func.isRequired };
