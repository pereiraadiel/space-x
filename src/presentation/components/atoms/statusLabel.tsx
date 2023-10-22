import React from "react";

type StatusLabelProps = { 
	status: 'success' | 'fail'
} & React.HTMLAttributes<HTMLParagraphElement>

const StatusLabel: React.FC<StatusLabelProps> = ({ status, ...rest }) => {
	const elements = {
		success: <p {...rest} className="status-label success">Sucesso</p>,
		fail: <p {...rest} className="status-label fail">Falha</p>
	}
	const element = elements[status];

	return (
		element
	);
};

export default StatusLabel;
