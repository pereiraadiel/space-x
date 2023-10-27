import { BarChartData } from "../../../infra/interfaces/barChartData";
import PieChart from "../molecules/pieChart";
import StackedBarChart from "../molecules/stackedBarChart"

type ChartWrapperProps = {
	pieData: {name: string, count: number, successCount: number}[],
	pieTitle: string;
	barData: BarChartData[]
	barTitle: string;
	categories: string[]
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({pieData, pieTitle, barData, barTitle, categories}) => {
	return (
		<>
			<div className="chart-wrapper">
				<PieChart data={pieData} title={pieTitle}/>
				<StackedBarChart data={barData} categories={categories} title={barTitle}/>
			</div>
		</>
	)
}

export default ChartWrapper