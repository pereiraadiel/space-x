import React from "react";

type TextProps = { 
  value: string,
	variant: 'title' | 'subtitle' | 'paragraph'
} & React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>

const Text: React.FC<TextProps> = ({ value, variant, ...rest }) => {
  const elements = {
		title: (children: React.ReactNode) => <h1 {...rest}>{children}</h1>,
		subtitle: (children: React.ReactNode) => <h2 {...rest}>{children}</h2>,
		paragraph: (children: React.ReactNode) => <p {...rest}>{children}</p>
	}
	const element = elements[variant]

	return element(value);
};

export default Text;
