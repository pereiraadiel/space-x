import React, { ChangeEventHandler } from "react";

type InputProps = { 
	id: string,
  value: string,
	placeholder?: string,
	onChange: ChangeEventHandler<HTMLInputElement>
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ id, value, placeholder, onChange, ...rest }) => {

	return (
		<input id={id} value={value} placeholder={placeholder} onChange={onChange} {...rest} />
	);
};

export default Input;
