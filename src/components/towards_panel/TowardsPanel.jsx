import React from 'react';
import {
    Chart,
    Geom,
    Tooltip
} from "bizcharts";
import {towardsPanelChartData} from "../../data/DashboardV1Data";
import IconFont from "../../common/IconFont";
import './page.css';

const cols = {
    sales: {
        tickInterval: 20
    }
};

class TowardsPanel extends React.Component {
    render() {
        return (
            <div className={'towards-panel-item'}>
                <div className={'inner'}>
                    <div className={'title'}>{this.props.panel.title}</div>
                    <div className={'content'}>
                        <div>
                            <Chart width={60} height={32} data={towardsPanelChartData} scale={cols} padding={[0, 0, 0, 0]}
                                   forceFit>
                                <Geom type="interval" position="year*sales" style={{fill: this.props.panel.color}}/>
                                <Tooltip
                                    useHtml
                                    htmlContent={(year, item) => {
                                        return `<span style="position: absolute; top: ${item[0].point.y}px;left: ${item[0].point.x}px;padding: 0 5px;background-color: rgba(0,0,0,0.6);color: #FFF;">${item[0].value}</span>`;
                                    }}
                                />
                            </Chart>
                        </div>
                        <div className={'num'} style={{color: this.props.panel.color}}>
                            <IconFont type={this.props.panel.undulation}/>1500
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TowardsPanel;