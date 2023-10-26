import React from 'react';
import useStackedBarChart from '../../hooks/useStackedBarChart';
import { LaunchByYear } from '../../../infra/interfaces/launchStat';

type StackedBarChartProps = {
	data: LaunchByYear[];
	categories: string[];
	title: string;
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ data, title, categories }) => {
  useStackedBarChart(data, title, categories)

  return(
		<div className="stacked-chart">
			<div id="echarts-container" style={{ width: '100%', height: '400px' }} />
		</div>
	)
};

export default StackedBarChart;
