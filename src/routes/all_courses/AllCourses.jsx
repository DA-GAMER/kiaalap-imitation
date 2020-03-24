import React from 'react';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import {Button, } from "antd";
import {allCoursesData} from "../../data/CoursesData";
import { HeartFilled, PayCircleFilled } from '@ant-design/icons';
import './page.css';

class AllCourses extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Courses', 'All Courses']}/>
                <div className={'kiaalap-all-courses'}>
                    <div className={'inner'}>
                        {
                            allCoursesData.map((item, index) => {
                                return (
                                    <div key={index} className={'all-courses'}>
                                        <div>
                                            <div><img alt={"img"} src={item.img}/></div>
                                            <div className={'all-courses-box'}>
                                                <div className={'all-courses-name'}>{item.name}</div>
                                                <div style={{padding: '12px 0'}}>
                                                    <span>1 Year </span>&nbsp;
                                                    <span><HeartFilled /> 50</span>&nbsp;&nbsp;
                                                    <span><PayCircleFilled /> 500</span>
                                                </div>
                                                <div>
                                                    <div>
                                                        <span style={{fontWeight: 'bold'}}>Duration: </span> 6 Months
                                                    </div>
                                                    <div>
                                                        <span style={{fontWeight: 'bold'}}>Professor: </span> ane Doe
                                                    </div>
                                                    <div>
                                                        <span style={{fontWeight: 'bold'}}>Students: </span> 100+
                                                    </div>
                                                </div>
                                                <div style={{paddingTop: 12}}>
                                                    <Button type={'primary'} size={'small'}>Read More</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AllCourses;