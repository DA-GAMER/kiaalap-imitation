import React from 'react';
import {List} from "antd";
import './page.css';

class BoxLoremIpsumListPanel extends React.Component{
    render() {

        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];

        return (
            <div className={'box-lorem-ipsum-list'}>
                <div className={'inner'}>
                    <div className={'title'} style={{backgroundColor: this.props.panel.color}}>
                        <div>Title text</div>
                        <div>{this.props.panel.val}</div>
                        <div>Lorem Ipsum passages and more recently with desktop published software.</div>
                    </div>
                    <div>
                        <List
                            size="small"
                            header={<div>Header</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxLoremIpsumListPanel;