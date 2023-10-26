import React from 'react';

type CardProps = {
  data: (string | number | React.ReactNode)[];
};

const Card: React.FC<CardProps> = ({ data }) => {
	const [
		flightNumber,
		logo,
		mission,
		launchDate,
		rocket,
		result,
		video
	] = data;

  return (
		<div className="card">
			<div className="left">
				{logo}
				<p>
					{flightNumber}
				</p>
			</div>
			
			<div className="info">
				<p>
					{mission}
				</p>
				<p>
					{launchDate}
				</p>
			</div>

			<div className="right">
				{video}
				{result}
			</div>
		</div>
	)
};

export default Card;
