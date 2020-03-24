import React from 'react';
import {Progress} from "antd";
import './page.css';

class AnalyticsProgressPanel extends React.Component {
    render() {
        return (
            <div className={'analytics-progress'}>
                <div className={'inner'}>
                    <div className={'title'}>{this.props.panel.val}%</div>
                    <div>{this.props.panel.time}</div>
                    <div>
                        <Progress percent={this.props.panel.val} size="small" strokeColor={this.props.panel.strokeColor}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnalyticsProgressPanel;