import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, handleClick, name }) {
  return (
    <button className={className} type="button" onClick={handleClick}>
      {name}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
