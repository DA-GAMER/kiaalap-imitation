import React from 'react';
import { Progress } from 'antd';
import './page.css';

class PercentagePanel extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <div className={'inner'}>
                    <div className={'title'}>{this.props.panel.title}</div>
                    <div className={'price'}>
                        <span>{this.props.panel.price}</span>
                        <span>{this.props.panel.priceTitle}</span>
                    </div>
                    <div className={'progress'}>
                        <Progress percent={30} strokeColor={this.props.panel.progressColor} size={'small'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PercentagePanel;