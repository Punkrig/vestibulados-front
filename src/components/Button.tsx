import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
    >
      <div>
        {children}
      </div>
    </button>
  );
};

export default Button;
