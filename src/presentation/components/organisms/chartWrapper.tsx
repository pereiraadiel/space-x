import { ChartData } from "../../../infra/interfaces/chartData"
import PieChart from "../molecules/pieChart";
import StackedBarChart from "../molecules/stackedBarChart"

type ChartWrapperProps = {
	pieData: {name: string, count: number, successCount: number}[],
	pieTitle: string;
	barData: ChartData[]
	barTitle: string;
	categories: string[]
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({pieData, pieTitle, barData, barTitle, categories}) => {
	return (
		<>
			<div className="chart-wrapper">
				<PieChart data={pieData} categories={categories} title={pieTitle}/>
				<StackedBarChart data={barData} categories={categories} title={barTitle}/>
			</div>
		</>
	)
}

export default ChartWrapper