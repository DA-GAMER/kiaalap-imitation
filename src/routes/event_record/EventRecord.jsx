import React from 'react';
import {Calendar, Badge} from "antd";
import './page.css';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

class EventRecord extends React.Component {

    constructor(props) {
        super(props);
        this.dateCellRender = this.dateCellRender.bind(this);
        this.monthCellRender = this.monthCellRender.bind(this);
    }

    getListData(value) {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    {type: 'warning', content: 'This is warning event.'},
                    {type: 'success', content: 'This is usual event.'},
                ];
                break;
            case 10:
                listData = [
                    {type: 'warning', content: 'This is warning event.'},
                    {type: 'success', content: 'This is usual event.'},
                    {type: 'error', content: 'This is error event.'},
                ];
                break;
            case 15:
                listData = [
                    {type: 'warning', content: 'This is warning event'},
                    {type: 'success', content: 'This is very long usual event。。....'},
                    {type: 'error', content: 'This is error event 1.'},
                    {type: 'error', content: 'This is error event 2.'},
                    {type: 'error', content: 'This is error event 3.'},
                    {type: 'error', content: 'This is error event 4.'},
                ];
                break;
            default:
        }
        return listData || [];
    }

    dateCellRender(value) {
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content}/>
                    </li>
                ))}
            </ul>
        );
    }

    getMonthData(value) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    monthCellRender(value) {
        const num = this.getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    render() {
        return (
            <div className={'event-record'}>
                <Breadcrumb breadcrumbs={['Home', 'Event']}/>
                <div style={{margin: '12px 12px 0 12px', padding: '12px', backgroundColor: '#FFF'}}>
                    <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender}/>
                </div>
            </div>
        );
    }
}

export default EventRecord;