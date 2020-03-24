import React from 'react';
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend
} from "bizcharts";
import {dashboardChartData} from '../../data/DashboardV1Data';

const cols = {
    month: {
        range: [0, 1]
    }
};

class DashboardChart extends React.Component {

    render() {
        return (
            <div>
                <Chart height={400} data={dashboardChartData} scale={cols} padding={[ 20, 40, 80, 60]} forceFit>
                    <Legend />
                    <Axis name="month" />
                    <Axis
                        name="temperature"
                        label={{
                            formatter: val => `${val}`
                        }}
                    />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom
                        type="line"
                        position="month*temperature"
                        size={1.5}
                        color={['city', ['#006DF0', '#933EC5', '#65b12d']]}
                        shape={"smooth"}
                    />
                    <Geom
                        type="point"
                        position="month*temperature"
                        size={4}
                        shape={"circle"}
                        color={['city', ['#006DF0', '#933EC5', '#65b12d']]}
                    />
                </Chart>
            </div>
        );
    }
}

export default DashboardChart;