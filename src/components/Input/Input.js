import React from "react";
import "./index.scss";

export const Input = ({ labelText, options, ...props }) => {
  console.log("Input -> props", props);
  const { type } = props;

  return (
    <label className="label">
      {labelText}
      {type === "radio" ? (
        <div className="input__radio-group">
          {options.map((option, index) => {
            return (
              <div key={option}>
                <input
                  {...props}
                  type="radio"
                  id={option}
                  name={labelText}
                  value={option}
                  defaultChecked={index === 0}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            );
          })}
        </div>
      ) : (
        <input className="input" {...props} />
      )}
    </label>
  );
};
