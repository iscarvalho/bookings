import React from 'react';

interface ButtonProps {
	onClick?: () => void;
	text: string;
	variant?: 'primary' | 'secondary' | 'danger';
	type?: 'button' | 'submit' | 'reset';
}

enum ButtonVariant {
	PRIMARY = 'ring-blue-500 hover:bg-blue-600 bg-blue-500',
	SECONDARY = 'ring-gray-500 hover:bg-gray-600 bg-gray-500',
	DANGER = 'ring-red-500 hover:bg-red-600 bg-red-500'
}
const Button: React.FC<ButtonProps> = ({ onClick, text, variant, type }) => {
	const color = ButtonVariant[variant?.toUpperCase() as keyof typeof ButtonVariant] || 'bg-gray-100';
	return (
		<button
			onClick={onClick}
			type={type}
			className={`rounded-md px-5 py-1.5 mt-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ms-2 ${color}`}
		>
			{text}
		</button>
	);
};

export default Button;