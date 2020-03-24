import React from 'react';
import {Badge, Avatar, Menu, Dropdown} from "antd";
import {DownOutlined} from '@ant-design/icons';
import IconFont from "../../common/IconFont";
import './page.css';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                Documentation
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                Expert Backend
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                Expert FrontEnd
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                Contact Support
            </a>
        </Menu.Item>
    </Menu>
);

class HeaderUser extends React.Component {

    render() {
        return (
            <div className={'kiaalap-header-user'}>
                <div>
                    <Badge offset={[5,15]} color={'#FFF'} dot>
                        <IconFont type="icon-test154"/>
                    </Badge>
                </div>
                <div>
                    <Badge offset={[5,15]} color={'#FFF'} dot>
                        <IconFont type="icon-test82"/>
                    </Badge>
                </div>
                <div>
                    <Dropdown overlay={menu}>
                        <a className="project-link" onClick={e => e.preventDefault()} href="/#">
                            <Avatar size={'small'}>USER</Avatar> DA-GAMER <DownOutlined/>
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }

}

export default HeaderUser;