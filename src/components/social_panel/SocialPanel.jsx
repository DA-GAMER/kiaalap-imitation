import React from 'react';
import IconFont from "../../common/IconFont";
import './page.css';

class SocialPanel extends React.Component {
    render() {
        return (
            <div className={'social-panel ' + this.props.panel.img}>
                <div className={'inner'}>
                    <div className={'social-panel-img'}>
                        <IconFont type={this.props.panel.img}/>
                    </div>
                    <div className={'social-panel-content'}>
                        <div>{this.props.panel.num}</div>
                        <div>{this.props.panel.growing}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialPanel;