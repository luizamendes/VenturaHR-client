import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const Button = ({ buttonText, link, ...props }) => {
  if (link) {
    return (
      <Link className="button" to={link}>
        {buttonText}
      </Link>
    );
  }

  return (
    <button className="button" {...props}>
      {buttonText}
    </button>
  );
};
