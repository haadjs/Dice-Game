import React from 'react';

const Button = ({ navigate, title, className = '', to, ...rest }) => {
  const handleClick = () => {
    if (to) {
      navigate(to); // Navigate to the provided 'to' path
    }
  };

  return (
    <button
      onClick={handleClick} // Trigger navigate on click
      className={`btn text-white bg-black px-4 py-1 rounded-md ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
