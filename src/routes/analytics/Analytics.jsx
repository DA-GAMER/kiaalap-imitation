import React from 'react';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import AnalyticsProgressPanel from "../../components/analytics_progress_panel/AnalyticsProgressPanel";
import VisitsPanel from "../../components/visits_panel/VisitsPanel";
import {analyticsProgressPanelData, visitsPanelData} from "../../data/AnalyticsData";
import './page.css';

class Analytics extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Education', 'Analytics']}/>
                <div className={'kiaalap-analytics-progress'}>
                    {
                        analyticsProgressPanelData.map((item, index) => {
                            return <AnalyticsProgressPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-analytics-visits'}>
                    {
                        visitsPanelData.map((item, index)=>{
                            return <VisitsPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-analytics-progress'}>
                    {
                        analyticsProgressPanelData.map((item, index) => {
                            return <AnalyticsProgressPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-analytics-visits'}>
                    {
                        visitsPanelData.map((item, index)=>{
                            return <VisitsPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-analytics-progress'}>
                    {
                        analyticsProgressPanelData.map((item, index) => {
                            return <AnalyticsProgressPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-analytics-visits'}>
                    {
                        visitsPanelData.map((item, index)=>{
                            return <VisitsPanel key={index} panel={item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Analytics;