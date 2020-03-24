import React from 'react';
import IconFont from "../../common/IconFont";
import './page.css';

class StatisticalLearningPanel extends React.Component {
    render() {
        return (
            <div className={'statistical-learning'}>
                <div className={'inner'}>
                    <div className={'title'}>
                        <div>{this.props.panel.title}</div>
                        <div><IconFont type={this.props.panel.type}/></div>
                    </div>
                    <div className={'num'} style={{color: this.props.panel.color}}>{this.props.panel.num}</div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and Lorem <span style={{fontWeight: 'bold'}}>typesetting industry</span> spa.
                    </div>
                </div>
            </div>
        );
    }
}

export default StatisticalLearningPanel;