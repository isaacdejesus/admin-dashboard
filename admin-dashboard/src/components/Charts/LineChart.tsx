import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import {lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis} from '../../data/dummy';
import {LineCustomSeries} from '../../types';
import { useAppSelector } from '../../app/hooks';
const LineChart = () => {
    const currentMode = useAppSelector(state => state.ui.currentMode);
    return(
        <ChartComponent
            id="line-chart"
            height="420px"
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{ border: {width: 0}}}
            tooltip={{enable: true}}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item: LineCustomSeries, index) => (
                    <SeriesDirective key={index} {...item}/>
                    ))}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default LineChart;
