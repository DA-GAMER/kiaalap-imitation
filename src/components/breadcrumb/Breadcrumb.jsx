import React from 'react';
import {Breadcrumb as BaseBreadcrumb, Input} from "antd";
import './page.css';

const {Search} = Input;

class Breadcrumb extends React.Component {

    render() {
        return (
            <div className={'kiaalap-breadcrumb'}>
                <div>
                    <div className={'title'}>
                        <BaseBreadcrumb>
                            {
                                this.props.breadcrumbs.length > 0 && this.props.breadcrumbs.map((item, index) => {
                                    return <BaseBreadcrumb.Item key={index}>{item}</BaseBreadcrumb.Item>;
                                })
                            }
                        </BaseBreadcrumb>
                    </div>
                    <div style={{float: 'right'}}>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;