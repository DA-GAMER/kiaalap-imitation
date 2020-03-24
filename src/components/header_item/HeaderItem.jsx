import React from 'react';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import './page.css';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/#">
                Documentation
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/#">
                Expert Backend
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/#">
                Expert FrontEnd
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/#">
                Contact Support
            </a>
        </Menu.Item>
    </Menu>
);

class HeaderItem extends React.Component {

    render() {
        return (
            <div className={'kiaalap-header-item'}>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>
                    <Dropdown overlay={menu}>
                        <a className="project-link" onClick={e => e.preventDefault()} href="/#">
                            Project <DownOutlined/>
                        </a>
                    </Dropdown>
                </div>
                <div>Support</div>
            </div>
        )
    }

}

export default HeaderItem;