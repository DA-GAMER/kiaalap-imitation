import React from 'react';
import {Menu} from 'antd';
import {withRouter, Link} from "react-router-dom";
import IconFont from "../../common/IconFont";
import './page.css';

const {SubMenu} = Menu;

class LeftSide extends React.Component {

    rootSubmenuKeys = ['education', 'professors', 'students', 'courses', 'library', 'departments'];

    constructor(props) {
        super(props);
        let path = this.props.location.pathname;
        let defaultSelectedKey;
        let defaultOpenKeys;
        if ("/" === path) {
            defaultSelectedKey = "dashboard_v1";
            defaultOpenKeys = ["education"];
        } else {
            let pathArr = path.split("/");
            defaultSelectedKey = pathArr[pathArr.length - 1];
            pathArr.pop();
            pathArr.shift();
            defaultOpenKeys = pathArr;
        }
        this.state = {
            openKeys: defaultOpenKeys,
            defaultSelectedKey
        }
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <div className={'kiaalap-left-side-menu'}>
                <div className={'kiaalap-left-side-inner-menu'}>
                    <Menu
                        defaultSelectedKeys={[this.state.defaultSelectedKey]}
                        defaultOpenKeys={this.state.openKeys}
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                    >
                        <SubMenu
                            key="education"
                            title={
                                <span>
                                    <IconFont type="icon-test13"/>
                                    <span>Education</span>
                                </span>
                            }
                        >
                            <Menu.Item key="dashboard_v1">
                                <Link to={'/'}>Dashboard v.1</Link>
                            </Menu.Item>
                            <Menu.Item key="analytics">
                                <Link to={'/education/analytics'}>Analytics</Link>
                            </Menu.Item>
                            <Menu.Item key="widgets">
                                <Link to={'/education/widgets'}>Widgets</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="event_record">
                            <Link to={'/event_record'}>
                                <IconFont type="icon-test80"/>
                                <span>Event</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="professors"
                            title={
                                <span>
                                <IconFont type="icon-test52"/>
                                <span>Professors</span>
                            </span>
                            }
                        >
                            <Menu.Item key="all_professors">
                                <Link to={'/professors/all_professors'}>All Professors</Link>
                            </Menu.Item>
                            <Menu.Item key="add_professors">
                                <Link to={'/professors/add_professors'}>Add Professor</Link>
                            </Menu.Item>
                            <Menu.Item key="edit_professors">
                                <Link to={'/professors/edit_professors'}>Edit Professor</Link>
                            </Menu.Item>
                            <Menu.Item key="professor_profile">
                                <Link to={'/professors/professor_profile'}>Professor Profile</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="students"
                            title={
                                <span>
                                <IconFont type="icon-test110"/>
                                <span>Students</span>
                            </span>
                            }
                        >
                            <Menu.Item key="all_students">
                                <Link to={'/students/all_students'}>All Students</Link>
                            </Menu.Item>
                            <Menu.Item key="add_students">
                                <Link to={'/students/add_students'}>Add Student</Link>
                            </Menu.Item>
                            <Menu.Item key="edit_students">
                                <Link to={'/students/edit_students'}>Edit Student</Link>
                            </Menu.Item>
                            <Menu.Item key="student_profile">
                                <Link to={'/students/student_profile'}>Student Profile</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="courses"
                            title={
                                <span>
                                <IconFont type="icon-test128"/>
                                <span>Courses</span>
                            </span>
                            }
                        >
                            <Menu.Item key="all_courses">
                                <Link to={'/courses/all_courses'}>All Courses</Link>
                            </Menu.Item>
                            <Menu.Item key="add_courses">
                                <Link to={'/courses/add_courses'}>Add Course</Link>
                            </Menu.Item>
                            <Menu.Item key="edit_courses">
                                <Link to={'/courses/edit_courses'}>Edit Course</Link>
                            </Menu.Item>
                            <Menu.Item key="courses_payment">
                                <Link to={'/courses/courses_payment'}>Courses Payment</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="library"
                            title={
                                <span>
                                <IconFont type="icon-test128"/>
                                <span>Library</span>
                            </span>
                            }
                        >
                            <Menu.Item key="library_assets">
                                <Link to={'/library/library_assets'}>Library Assets</Link>
                            </Menu.Item>
                            <Menu.Item key="add_library_asset">
                                <Link to={'/library/add_library_asset'}>Add Library Asset</Link>
                            </Menu.Item>
                            <Menu.Item key="edit_library_asset">
                                <Link to={'/library/edit_library_asset'}>Edit Library Asset</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="departments"
                            title={
                                <span>
                                <IconFont type="icon-test22"/>
                                <span>Departments</span>
                            </span>
                            }
                        >
                            <Menu.Item key="departments_list">
                                <Link to={'/departments/departments_list'}>Departments List</Link>
                            </Menu.Item>
                            <Menu.Item key="add_departments">
                                <Link to={'/departments/add_departments'}>Add Departments</Link>
                            </Menu.Item>
                            <Menu.Item key="edit_departments">
                                <Link to={'/departments/edit_departments'}>Edit Departments</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default withRouter(LeftSide);