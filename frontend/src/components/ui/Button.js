import React from 'react';
import './ui.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  disabled,
  isLoading,
  ...props 
}) => {
  const baseClass = 'ui-btn';
  const variantClass = `ui-btn-${variant}`;
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin mr-2">⟳</span> // Simple spinner
      ) : Icon ? (
        <Icon size={16} />
      ) : null}
      {children}
    </button>
  );
};
