import React from 'react';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import {allStudentsData} from "../../data/StudentsData";
import './page.css';

class AllStudents extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Students', 'All Students']}/>
                <div style={{padding: '12px 0', overflow: 'hidden', width: '100%'}}>
                    {
                        allStudentsData.map((item, index) => {
                            return (
                                <div key={index} style={{float: 'left', width: '25%', marginBottom: 24}}>
                                    <div style={{margin: '0 12px', backgroundColor: '#FFF'}}>
                                        <div>
                                            <img style={{width: '100%'}} alt={'logo'} src={item.img}/>
                                        </div>
                                        <div style={{textAlign: 'center'}}>
                                            <div style={{padding: '12px 0', fontWeight: 'bold', fontSize: 20}}>Alexam Angles</div>
                                            <div>Computer Science</div>
                                            <div style={{paddingBottom: 12}}>Age: 20 Years</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default AllStudents;