import Text from "../atoms/text";
import StatusLabel from "../atoms/statusLabel";
import { PieChartData } from "../../../infra/interfaces/pieChartData";
import usePieChart from "../../hooks/usePieChart";
import usePieChartStatistics from "../../hooks/usePieChartStatistics";

type PieChartProps = {
	data: PieChartData[]
	title: string
}

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
	usePieChart(data, title);
  const { totalLaunches, totalLaunchesSuccess } = usePieChartStatistics(data);
  const successPercentage = (totalLaunchesSuccess / totalLaunches * 100).toFixed(2);
	const failPercentage = (100 - Number(successPercentage)).toFixed(2);

	console.warn(data, title)
		
	return (
		<>
			<div className="pie-chart">
				<div id="echarts-pie-container" style={{ width: '100%', height: '400px', display: 'inline-block' }} />
				<Text variant="paragraph" value="Resultado de lançamentos:"/>
				<div className="status-wrapper">
					<div className="status">
						<StatusLabel status="success"/>
						<Text variant="paragraph" value={`${totalLaunchesSuccess} (${successPercentage}%)`}/>
					</div>
					<div className="status">
						<StatusLabel status="fail"/>
						<Text 
							variant="paragraph" 
							value={`${totalLaunches - totalLaunchesSuccess} (${failPercentage}%)`}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default PieChart