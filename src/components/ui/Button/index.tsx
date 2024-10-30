import React from 'react';

type PropTypes = {
  className?: string;
  type: 'button' | 'submit' | undefined;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button = (props: PropTypes) => {
  const { className, type, onClick, children, disabled } = props;
  return (
    <>
      <button className={`${className}`} type={type} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
