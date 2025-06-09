import React from 'react';


const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className=" bg-pink-600 border-b-4 border-pink-600 rounded-lg text-pink-800
         transition hover:relative hover:bottom-0.25 active:border-b-0 active:pt-1">
      {children}
    </button>
  );
};

export default Button;