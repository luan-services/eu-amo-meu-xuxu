import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className="w-full md:w-24 h-12 bg-pink-100 border-3 border-pink-600 rounded-lg p-2 text-pink-800
         transition hover:scale-105"
    >
      {children}
    </button>
  );
};

export default Button;