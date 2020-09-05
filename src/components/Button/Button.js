import React from "react";
import "./index.scss";

export const Button = ({ buttonText, ...props }) => {
  return (
    <button className="button" {...props}>
      {buttonText}
    </button>
  );
};
