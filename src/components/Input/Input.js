import React from 'react';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

export const Input = ({
  labelText,
  options,
  date,
  invalid,
  invalidText,
  className,
  ...props
}) => {
  const { type, name } = props;
  const inputClasses = classNames({
    [className]: !!className,
    input: true,
    invalid: !!invalid,
  });

  const labelClasses = classNames({
    label: true,
    invalid: !!invalid,
  });

  const renderInput = () => {
    if (type === 'radio') {
      return (
        <div className="input__radio-group">
          {options.map((option, index) => {
            return (
              <div key={option}>
                <input
                  {...props}
                  type="radio"
                  id={option}
                  name={name}
                  value={option}
                  defaultChecked={index === 0}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            );
          })}
        </div>
      );
    }

    if (date) {
      return (
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className={inputClasses}
          selected={date}
          {...props}
        />
      );
    }

    return <input className={inputClasses} {...props} />;
  };

  const renderInvalidText = () => {
    return <p className="invalid-text">{invalidText}</p>;
  };

  return (
    <label className={labelClasses}>
      {labelText}
      {renderInput()}
      {renderInvalidText()}
    </label>
  );
};
