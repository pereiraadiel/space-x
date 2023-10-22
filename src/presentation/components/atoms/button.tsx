import React, { MouseEventHandler } from "react";

type ButtonProps = { 
	children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => {
	return (
		<button onClick={onClick} className="button" {...rest} >
			{children}
		</button>
	);
};

export default Button;
