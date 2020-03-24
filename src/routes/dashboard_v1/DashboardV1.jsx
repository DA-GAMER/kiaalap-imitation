import React from 'react';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import PercentagePanel from '../../components/percentage_panel/PercentagePanel';
import DashboardChart from '../../components/dashboard_chart/DashboardChart';
import TowardsPanel from "../../components/towards_panel/TowardsPanel";
import SocialPanel from "../../components/social_panel/SocialPanel";
import TeacherPanel from "../../components/teacher_panel/TeacherPanel";
import {percentagePanel, towardsPanelData, socialPanelData, teacherPanelData} from '../../data/DashboardV1Data';
import './page.css';

class DashboardV1 extends React.Component {

    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Education', 'Dashboard v.1']}/>
                <div className={'kiaalap-dashboard-v1-progress'}>
                    {
                        percentagePanel.map((item) => {
                            return <PercentagePanel key={item.id} className={'kiaalap-dashboard-v1-panel'}
                                                    panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-dashboard-v1-progress kiaalap-dashboard-v1-chart'}>
                    <div className={'university-earnings'}>
                        <div className={'inner'}>
                            <div className={'title'}>
                                <span>University Earnings</span>
                                <span>All Earnings are in million $</span>
                            </div>
                            <div>
                                <DashboardChart/>
                            </div>
                        </div>
                    </div>
                    <div className={'towards-panel'}>
                        <div className={'inner'}>
                            {
                                towardsPanelData.map((item) => {
                                    return <TowardsPanel key={item.id} panel={item}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={'kiaalap-dashboard-v1-social'}>
                    {
                        socialPanelData.map((item, index) => {
                            return <SocialPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-dashboard-v1-teacher'}>
                    {
                        teacherPanelData.map((item, index) => {
                            return <TeacherPanel key={index} panel={item}/>
                        })
                    }
                </div>
            </div>
        );
    }

}

export default DashboardV1;
