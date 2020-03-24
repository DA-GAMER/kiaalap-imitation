import React from 'react';
import {LikeFilled} from '@ant-design/icons';
import {Button} from "antd";
import './page.css';

class ActivityPanel extends React.Component{
    render() {
        return (
            <div className={'activity'}>
                <div className={'img'}>
                    <img alt={'logo'} src={'http://demo.cssmoban.com/cssthemes6/cob_1_kiaalap/img/contact/1.jpg'}/>
                </div>
                <div className={'content'}>
                    <div>
                        <div className={'title'}>
                            <div>{this.props.panel.name}</div>
                            <div>{this.props.panel.time}</div>
                        </div>
                        <div className={'ctx'}>
                            <div>{this.props.panel.content}</div>
                        </div>
                        <div>
                            <Button size={'small'}><LikeFilled/>Like</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityPanel;