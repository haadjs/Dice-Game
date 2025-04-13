import React from "react";

const Button = ({ navigate, title, className = "", to, func, ...rest }) => {
  const handleClick = () => {
    if (func) func();
    if (to) navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`btn bg-black px-4 py-1 rounded-md ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
