import React from 'react'

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`border-none p-3 text-white bg-green-700 rounded hover:cursor-pointer hover:bg-blue-500 transition duration-500 hover:text-white shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
