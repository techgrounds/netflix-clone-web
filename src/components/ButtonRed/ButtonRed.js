import React from 'react';
import './styles.scss';

const ButtonRed = ({ children, ...otherProps }) => {
  return (
    <button className="btn-red" {...otherProps}>
      {children}
    </button>
  );
};

export default ButtonRed;
