import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

export const Input = ({ labelText, options, date, ...props }) => {
  const { type, name } = props;

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
          className="input"
          selected={date}
          {...props}
        />
      );
    }

    return <input className="input" {...props} />;
  };

  return (
    <label className="label">
      {labelText}
      {renderInput()}
    </label>
  );
};
