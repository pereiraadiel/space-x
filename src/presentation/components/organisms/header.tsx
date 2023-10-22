import React from "react";
import Icon from "../atoms/icon";
import Text from "../atoms/text";

const Header: React.FC = () => {
	return (
		<header>
			<Icon name="rocket"/>
			<Text variant="title" value="Space X"/>
		</header>
	)
};

export default Header;
