import React, { ChangeEventHandler } from "react";
import Input from "../atoms/input";
import Icon from "../atoms/icon";

type SearchInputProps = { 
	id: string,
  value: string,
	placeholder?: string,
	onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchInput: React.FC<SearchInputProps> = ({ id, value, placeholder, onChange }) => {

	return (
		<div className="search">
			<Icon name="search"/>	
			<Input id={id} value={value} onChange={onChange} placeholder={placeholder} />
		</div>
	);
};

export default SearchInput;
