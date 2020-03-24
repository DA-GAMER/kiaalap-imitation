import React from 'react';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import {coursesPaymentData} from '../../data/CoursesData';
import IconFont from "../../common/IconFont";
import { Tabs, Button, Input} from 'antd';
import './page.css';

const { TabPane } = Tabs;

class CoursesPayment extends React.Component {

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Courses', 'Courses Payment']}/>
                <div className={'kiaalap-courses-payment'}>
                    {
                        coursesPaymentData.map((item, index) => {
                            return (
                                <div key={index} className={'courses-payment'}>
                                    <div className={'inner'} style={{paddingBottom: 20}}>
                                        <div className={'courses-payment-common'} style={{fontWeight: 'bold', fontSize: 24}}>
                                            <div style={{paddingTop: 16}}>{item.idCard}</div>
                                            <div style={{fontSize: 48, color: '#006DF0'}}><IconFont type={item.icon}/></div>
                                        </div>
                                        <div className={'courses-payment-common'}>
                                            <div style={{fontWeight: 'bold'}}>Expiry Date :</div>
                                            <div><span style={{fontWeight: 'bold'}}>Name :</span> Selim sha</div>
                                        </div>
                                        <div className={'courses-payment-common'}>
                                            <div>20/09/17</div>
                                            <div><span style={{fontWeight: 'bold'}}>CSV :</span>2345</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div style={{padding: '12px 0'}}>
                    <div style={{margin: '0 12px'}}>
                        <div style={{backgroundColor: '#FFF', padding: 24}}>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="Credit Card" key="1">
                                    <div style={{paddingTop: 24}}>
                                        <div className={'credit-card'}>
                                            <div style={{padding: 24}}>
                                                <div className={'credit-card-img'}><IconFont type={'xinyongka'}/></div>
                                                <div style={{fontSize: 32, color: '#F1F1F1'}}>•••• •••• •••• ••••</div>
                                                <div>
                                                    <div style={{fontWeight: 'bold', color: '#F1F1F1'}}>FULL NAME</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{paddingTop: 24}}>
                                            <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                            <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                            <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                            <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                        </div>
                                        <div style={{paddingTop: 6}}>
                                            <Button type={'primary'} size={'large'} block>Submit</Button>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Debit Card" key="2">
                                    <div>
                                        <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                        <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                        <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                        <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                    </div>
                                    <div className={'debit-card-icon'}>
                                        <span><IconFont type={'ai-pay-copy'}/></span>
                                        <span><IconFont type={'xinyongka'}/></span>
                                        <span><IconFont type={'ccpaypal'}/></span>
                                    </div>
                                    <div style={{paddingTop: 6}}>
                                        <Button type={'primary'} size={'large'} block>Submit</Button>
                                    </div>
                                </TabPane>
                                <TabPane tab="EMI" key="3">
                                    <div>
                                        <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                        <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                    </div>
                                    <div style={{paddingTop: 6}}>
                                        <Button type={'primary'} size={'large'} block>Submit</Button>
                                    </div>
                                </TabPane>
                                <TabPane tab="Banking" key="4">
                                    <div>
                                        <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                    </div>
                                    <div style={{paddingTop: 6}}>
                                        <Button type={'primary'} size={'large'} block>Submit</Button>
                                    </div>
                                </TabPane>
                                <TabPane tab="Address" key="5">
                                    <div>
                                        <div style={{padding: '6px 0'}}><Input size={'large'} placeholder="Basic usage" /></div>
                                    </div>
                                    <div style={{paddingTop: 6}}>
                                        <Button type={'primary'} size={'large'} block>Submit</Button>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursesPayment;