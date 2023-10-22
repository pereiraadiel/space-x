import React, { ChangeEventHandler, FormEventHandler } from "react";
import SearchInput from "../molecules/searchInput";
import Button from "../atoms/button";

type SearchBarProps = {
	value: string,
	onChange: ChangeEventHandler<HTMLInputElement>,
	onSubmit: FormEventHandler<HTMLFormElement>
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange, onSubmit, value}) => {
	return (
		<form className="search-bar" onSubmit={onSubmit}>
			<SearchInput id="search" value={value} onChange={onChange} placeholder="Buscar por missão, foguete ou resultado"/>
			<Button>Buscar</Button>
		</form>
	)
};

export default SearchBar;
