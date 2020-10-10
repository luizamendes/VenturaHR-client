import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';

export const Button = ({
  buttonText,
  link,
  className,
  kind,
  ...props
}) => {
  const buttonClasses = classNames({
    button: true,
    'button--primary': !kind || kind === 'primary',
    'button--secondary': kind === 'secondary',
    'button--link': kind === 'link',
    [className]: !!className,
  });

  if (link) {
    return (
      <Link className={buttonClasses} to={link}>
        {buttonText}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {buttonText}
    </button>
  );
};
