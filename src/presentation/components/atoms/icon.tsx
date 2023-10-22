import React from 'react';
import {FaSearch, FaRocket, FaYoutube } from 'react-icons/fa';

type IconProps = { 
	name: 'search' | 'rocket' | 'youtube'
}

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const elements = {
		search: <FaSearch />,
		rocket: <FaRocket/>,
		youtube: <FaYoutube/>
	}
	const element = elements[name]

	return (
		<div className="icon" {...rest}>
			{element}
		</div>
	);
};

export default Icon;
