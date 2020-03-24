import React from 'react';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Table, Tag } from 'antd';

class LibraryAssets extends React.Component {
    render() {

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href={'/#'}>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
        <a href={'/#'} style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a href={'/#'}>Delete</a>
      </span>
                ),
            },
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            }, {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            }, {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }, {
                key: '4',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }, {
                key: '5',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }, {
                key: '6',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }, {
                key: '7',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }, {
                key: '8',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }, {
                key: '9',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }, {
                key: '10',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }
        ];

        return (
            <div>
                <Breadcrumb breadcrumbs={['Library', 'Library Assets']}/>
                <div style={{margin: '12px 0'}}>
                    <div style={{padding: '0 12px'}}>
                        <div style={{padding: '24px', backgroundColor: '#FFF'}}>
                            <div style={{paddingBottom: 12, fontSize: 20, fontWeight: 'bold'}}>Library List</div>
                            <Table columns={columns} dataSource={data} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LibraryAssets;