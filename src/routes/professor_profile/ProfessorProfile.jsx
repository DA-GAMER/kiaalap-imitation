import React from 'react';
import {Tabs, Progress, Input} from "antd";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import IconFont from "../../common/IconFont";
import {Button} from 'antd';
import {activityData} from '../../data/ProfessorProfileData';
import ActivityPanel from "../../components/activity_panel/ActivityPanel";
import './page.css'

const {TabPane} = Tabs;

class ProfessorProfile extends React.Component {

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Professors', 'Professor Profile']}/>
                <div className={'kiaalap-professor-profile'}>
                    <div className={'professor-profile-left'}>
                        <div className={'inner'}>
                            <div className={'img'}>
                                <img alt={'logo'}
                                     src={'http://demo.cssmoban.com/cssthemes6/cob_1_kiaalap/img/profile/1.jpg'}/>
                            </div>
                            <div className={'professor-profile-table'}>
                                <div>
                                    <div className={'professor-profile-row professor-profile-header'}>
                                        <div>Name</div>
                                        <div>Fly Zend</div>
                                    </div>
                                    <div className={'professor-profile-row'}>
                                        <div>Designation</div>
                                        <div>Head of Dept.</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={'professor-profile-row professor-profile-header'}>
                                        <div>Email ID</div>
                                        <div>Phone</div>
                                    </div>
                                    <div className={'professor-profile-row'}>
                                        <div>fly@gmail.com</div>
                                        <div>+01962067309</div>
                                    </div>
                                </div>
                            </div>
                            <div className={'professor-profile-address'}>
                                <div>Address</div>
                                <div>E104, catn-2, Chandlodia Ahmedabad Gujarat, UK.</div>
                            </div>
                            <div className={'professor-profile-attention'}>
                                <div>
                                    <div>
                                        <IconFont type={'facebook'}/>
                                    </div>
                                    <div>500</div>
                                </div>
                                <div>
                                    <div>
                                        <IconFont type={'twitter'}/>
                                    </div>
                                    <div>900</div>
                                </div>
                                <div>
                                    <div>
                                        <IconFont type={'instagram'}/>
                                    </div>
                                    <div>600</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'professor-profile-right'}>
                        <div className={'inner'}>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="Activity" key="1">
                                    <div style={{padding: '12px 0'}}>
                                        {
                                            activityData.map((item, index) => {
                                                return <ActivityPanel key={index} panel={item}/>
                                            })
                                        }
                                    </div>
                                </TabPane>
                                <TabPane tab="Biography" key="2">
                                    <div style={{padding: '4px 0'}}>
                                        <div>
                                            <div className={'biography-table'}>
                                                <div className={'biography-table-header'} style={{fontWeight: 'bold'}}>
                                                    <div>Full Name</div>
                                                    <div>Mobile</div>
                                                    <div>Email</div>
                                                    <div>Location</div>
                                                </div>
                                                <div className={'biography-table-header'}>
                                                    <div>Fly Zend</div>
                                                    <div>01962067309</div>
                                                    <div>fly@gmail.com</div>
                                                    <div>UK</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{paddingTop: 24}}>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</div>
                                            <div>Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</div>
                                            <div style={{paddingTop: 24}}>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</div>
                                            <div>Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</div>
                                            <div style={{paddingTop: 24}}>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</div>
                                            <div>Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</div>
                                        </div>
                                        <div className={'biography'}>
                                            <div className={'title'}>Skill Set</div>
                                            <div>
                                                <div>
                                                    <div>Java</div>
                                                    <Progress percent={90} strokeColor={'#006DF0'} showInfo={false}/>
                                                </div>
                                                <div>
                                                    <div>Php</div>
                                                    <Progress percent={70} strokeColor={'#933EC5'} showInfo={false}/>
                                                </div>
                                                <div>
                                                    <div>Apps</div>
                                                    <Progress percent={50} strokeColor={'#65b12d'} showInfo={false}/>
                                                </div>
                                                <div>
                                                    <div>C#</div>
                                                    <Progress percent={30} strokeColor={'#D80027'} showInfo={false}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'biography'}>
                                            <div className={'title'}>Education</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                        </div>
                                        <div className={'biography'}>
                                            <div className={'title'}>Experience</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                        </div>
                                        <div className={'biography'}>
                                            <div className={'title'}>Subjects</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                            <div>· Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Update Details" key="3">
                                    <div className={'update-details'}>
                                        <div className={'btn-group'}>
                                            <div className={'btn-group-left'}>
                                                <div className={'inner'}>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'btn-group-right'}>
                                                <div className={'inner'}>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                    <div>
                                                        <Input placeholder="Basic usage" size={'large'}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{padding: 12}}>
                                            <Button type="primary" size={'large'} block>
                                                Submit
                                            </Button>
                                        </div>
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

export default ProfessorProfile;