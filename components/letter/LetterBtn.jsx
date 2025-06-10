import React from 'react';

const LetterButton = ({ children, onClick, className = '' }) => {
  return (
    <div className="border-b-4 border-pink-600 rounded-xl select-none cursor-pointer">
      <button
        onClick={onClick}
        className="cursor-pointer bg-pink-100 border-3 border-pink-600 rounded-lg p-2 text-pink-800
          transition active:relative active:top-1"
      >
        {children}
      </button>
      
    </div>
  );
};

export default LetterButton;