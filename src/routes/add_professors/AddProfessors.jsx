import React from 'react';
import {Tabs, Input, Upload, Select, Button} from "antd";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { InboxOutlined } from '@ant-design/icons';
import './page.css';

const { TabPane } = Tabs;
const { Dragger } = Upload;
const { TextArea } = Input;
const { Option } = Select;

class AddProfessors extends React.Component {

    callback(key) {
        console.log(key);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Professors', 'Add Professor']}/>
                <div className={'kiaalap-add-professors'}>
                    <div className={'inner'}>
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab="Basic Information" key="1">
                                <div className={'basic-information'}>
                                    <div className={'basic-information-left-tab'}>
                                        <div>
                                            <Input placeholder="Full Name" size={'large'}/>
                                        </div>
                                        <div>
                                            <Input placeholder="Address" size={'large'}/>
                                        </div>
                                        <div>
                                            <Input placeholder="Mobile no." size={'large'}/>
                                        </div>
                                        <div>
                                            <Input placeholder="Date of Birth" size={'large'}/>
                                        </div>
                                        <div>
                                            <Input placeholder="Postcode" size={'large'}/>
                                        </div>
                                        <div>
                                            <Dragger {...this.props}>
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">
                                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                                    band files
                                                </p>
                                            </Dragger>
                                        </div>
                                    </div>
                                    <div className={'basic-information-right-tab'}>
                                        <div>
                                            <Input placeholder="Department" size={'large'}/>
                                        </div>
                                        <div>
                                            <TextArea rows={5} placeholder={'Description'}/>
                                        </div>
                                        <div>
                                            <Select defaultValue="Select Gender" style={{ width: '100%' }} size={'large'} onChange={this.handleChange}>
                                                <Option value="SelectGender">Select Gender</Option>
                                                <Option value="Male">Male</Option>
                                                <Option value="Female">Female</Option>
                                            </Select>
                                        </div>
                                        <div>
                                            <Select defaultValue="Select country" style={{ width: '100%' }} size={'large'} onChange={this.handleChange}>
                                                <Option value="SelectCountry">Select country</Option>
                                                <Option value="India">Male</Option>
                                                <Option value="Pakistan">Pakistan</Option>
                                                <Option value="Amerika">Amerika</Option>
                                                <Option value="China">China</Option>
                                                <Option value="Dubai">Dubai</Option>
                                                <Option value="Nepal">Nepal</Option>
                                            </Select>
                                        </div>
                                        <div>
                                            <Select defaultValue="Select state" style={{ width: '100%' }} size={'large'} onChange={this.handleChange}>
                                                <Option value="SelectState">Select state</Option>
                                                <Option value="Gujarat">Gujarat</Option>
                                                <Option value="Maharastra">Maharastra</Option>
                                                <Option value="Rajastan">Rajastan</Option>
                                                <Option value="Maharastra">Maharastra</Option>
                                                <Option value="Rajastan">Rajastan</Option>
                                                <Option value="Gujarat">Gujarat</Option>
                                            </Select>
                                        </div>
                                        <div>
                                            <Select defaultValue="Select city" style={{ width: '100%' }} size={'large'} onChange={this.handleChange}>
                                                <Option value="SelectCity">Select city</Option>
                                                <Option value="Surat">Surat</Option>
                                                <Option value="Baroda">Baroda</Option>
                                                <Option value="Navsari">Navsari</Option>
                                                <Option value="Baroda">Baroda</Option>
                                                <Option value="Surat">Surat</Option>
                                            </Select>
                                        </div>
                                        <div>
                                            <Input placeholder="Website URL" size={'large'}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{paddingTop: 12}}>
                                    <Button type="primary" size={'large'} block>
                                        Submit
                                    </Button>
                                </div>
                            </TabPane>
                            <TabPane tab="Account Information" key="2">
                                <div className={'account-information'}>
                                    <div>
                                        <Input placeholder="Email" size={'large'}/>
                                    </div>
                                    <div>
                                        <Input placeholder="Phone" size={'large'}/>
                                    </div>
                                    <div>
                                        <Input placeholder="Password" size={'large'}/>
                                    </div>
                                    <div>
                                        <Input placeholder="Confirm Password" size={'large'}/>
                                    </div>
                                    <div>
                                        <Button type="primary" size={'large'} block>
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Social Information" key="3">
                                <div className={'account-information'}>
                                    <div>
                                        <Input placeholder="Facebook URL" size={'large'}/>
                                    </div>
                                    <div>
                                        <Input placeholder="Twitter URL" size={'large'}/>
                                    </div>
                                    <div>
                                        <Input placeholder="Google Plus" size={'large'}/>
                                    </div>
                                    <div>
                                        <Input placeholder="Linkedin URL" size={'large'}/>
                                    </div>
                                    <div>
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
        );
    }
}

export default AddProfessors;