import React from 'react';
import classNames from 'classnames';
import './index.scss';

export const Cardbox = ({ children, title, className,...props }) => {
  const cardboxClasses = classNames({
    cardbox: true, 
    [className]: className
  })

  return (
    <div className={cardboxClasses} {...props}>
      {title && <p className="cardbox__title">{title}</p>}
      {children}
    </div>
  );
};
