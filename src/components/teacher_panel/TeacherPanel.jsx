import React from 'react';
import {Button} from "antd";
import './page.css';

class TeacherPanel extends React.Component {
    render() {
        return (
            <div className={'teacher-panel'}>
                <div className={'inner'} style={{background: `#FFF url(${this.props.panel.bgImg}) no-repeat top center`, backgroundSize: '100% 258px'}}>
                    <div className={'teacher-img'}>
                        <img alt={"img"} src={this.props.panel.teacherImg}/>
                    </div>
                    <div className={'teacher-contetn'}>
                        <div className={'name'}>{this.props.panel.teacherName}</div>
                        <div>Web Designer & Developer</div>
                        <div>Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit</div>
                    </div>
                    <div className={'teacher-panel-follow-btn'}>
                        <Button type="primary">Follow</Button>
                    </div>
                    <div className={'teacher-panel-data'}>
                        {
                            this.props.panel.data.map((item, index) => {
                                return (
                                    <div key={index} className={'item'}>
                                        <div>{item.val}</div>
                                        <div>{item.type}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default TeacherPanel;