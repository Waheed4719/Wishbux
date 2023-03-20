import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: 'submit' | 'reset' | 'button' | undefined;
    size: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
}

const Button = ({ type = 'submit', size, onClick, children }: ButtonProps) => (
    <button type={type} className='round-btn' onClick={(e) => onClick && onClick(e)}>
        {children}
    </button>
);

export default Button;
