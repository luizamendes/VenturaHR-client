import React from 'react';
import './index.scss';

export const Cardbox = ({ children, title, ...props }) => {
  return (
    <div className="cardbox" {...props}>
      {title && <p className="cardbox__title">{title}</p>}
      {children}
    </div>
  );
};
