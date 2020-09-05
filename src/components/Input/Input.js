import React from "react";
import "./index.scss";

export const Input = ({ labelText, ...props }) => {
  return (
    <label className="label">
      {labelText}
      <input className="input" {...props} />
    </label>
  );
};
