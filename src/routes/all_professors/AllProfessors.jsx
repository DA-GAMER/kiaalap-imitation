import React from 'react';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import AllProfessorsPanel from "../../components/all_professors_panel/AllProfessorsPanel";
import {allProfessorsData} from "../../data/AllProfessorsData";
import './page.css';

class AllProfessors extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb breadcrumbs={['Professors', 'All AllProfessors']}/>
                <div className={'kiaalap-all-professors'}>
                    {
                        allProfessorsData.map((item, index) => {
                            return <AllProfessorsPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-all-professors'}>
                    {
                        allProfessorsData.map((item, index) => {
                            return <AllProfessorsPanel key={index} panel={item}/>
                        })
                    }
                </div>
                <div className={'kiaalap-all-professors'}>
                    {
                        allProfessorsData.map((item, index) => {
                            return <AllProfessorsPanel key={index} panel={item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default AllProfessors;