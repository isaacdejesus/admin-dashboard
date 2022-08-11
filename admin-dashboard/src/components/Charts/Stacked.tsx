import {StackedProps} from  '../../types';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import {stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis} from '../../data/dummy';
import {StackedCustomSeries} from '../../types';
const Stacked = ({width, height}: StackedProps) => {
    return(
        <ChartComponent
            width={width}
            height={height}
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            chartArea={{ border: {width: 0}}} 
            tooltip={{enable: true}}
            legendSettings={{background: 'white'}}
        >
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item: StackedCustomSeries, index) => 
                    <SeriesDirective 
                        key={index}
                        {...item}
                        />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Stacked;
