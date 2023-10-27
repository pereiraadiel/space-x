import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectFilterProps {
  options: Option[];
  onSelect: (selectedOption: Option | null) => void;
}

const SelectFilter: React.FC<SelectFilterProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.value === 'null' ? null : option);
    onSelect(option.value === 'null' ? null : option);
    setIsOpen(false);
  };

  return (
    <div className="select-filter">
      <div className={`select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Filtrar'}
      </div>
      <ul className={`options ${isOpen ? 'open' : ''}`}>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleOptionClick(option)}
            className={selectedOption === option ? 'selected' : ''}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectFilter;
