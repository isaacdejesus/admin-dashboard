import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,  DateTime, Legend, SplineAreaSeries} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, AreaPrimaryYAxis, AreaPrimaryXAxis} from '../../data/dummy';
import { Header } from '../../components';
import {AreaCustomSeries} from '../../types';
import { useAppSelector } from '../../app/hooks';
const Area = () => {
    const currentMode = useAppSelector(state => state.ui.currentMode);
    return(
        <div className="m04 md:m-10 mt-24 p-10 bg:white dark:bg-secondary-dark-bg rounded-3xl">
            <Header  category="Chart" title="Pie"/>
        <ChartComponent
            id="line-chart"
            height="420px"
            primaryXAxis={AreaPrimaryXAxis}
            primaryYAxis={AreaPrimaryYAxis}
            chartArea={{ border: {width: 0}}}
            tooltip={{enable: true}}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[SplineAreaSeries, DateTime, Legend, ]} />
            <SeriesCollectionDirective>
                {areaCustomSeries.map((item: AreaCustomSeries, index: any) => (
                    <SeriesDirective key={index} {...item}/>
                    ))}
            </SeriesCollectionDirective>
        </ChartComponent>
        </div>
    )
}


export default Area;
