import { ChangeEventHandler, FormEventHandler } from "react";
import SelectFilter from "../atoms/selectFilter";
import SearchBar from "./searchBar";

type FilterBarProps = {
	searchTerm: string,
	onChange: ChangeEventHandler<HTMLInputElement>,
	onSelect: (selectedOption: {value: string, label: string} | null) => void,
	onSubmit: FormEventHandler<HTMLFormElement>
}

const FilterBar: React.FC<FilterBarProps> = ({ onChange, onSelect, onSubmit, searchTerm}) => {
	return (
		<div className="filter-bar">
			<SelectFilter options={[
				{
					value: 'null',
					label: 'Ambos'
				},
				{
					value: 'true',
					label: 'Sucesso'
				},
				{
					value: 'false',
					label: 'Falha'
				}
			]}
				onSelect={onSelect}
			/>
			<SearchBar onChange={onChange} onSubmit={onSubmit} value={searchTerm}/>
		</div>
	)
};

export default FilterBar;



