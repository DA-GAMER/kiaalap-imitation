import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./layout/header/Header";
import LeftSide from './layout/left_side/LeftSide';
import DashboardV1 from "./routes/dashboard_v1/DashboardV1";
import Analytics from "./routes/analytics/Analytics";
import Widgets from "./routes/widgets/Widgets";
import EventRecord from "./routes/event_record/EventRecord";
import AllProfessors from "./routes/all_professors/AllProfessors";
import AddProfessors from "./routes/add_professors/AddProfessors";
import ProfessorProfile from "./routes/professor_profile/ProfessorProfile";
import AllStudents from "./routes/all_students/AllStudents";
import AllCourses from "./routes/all_courses/AllCourses";
import CoursesPayment from "./routes/courses_payment/CoursesPayment";
import LibraryAssets from "./routes/library_assets/LibraryAssets";
import './App.css';

function App() {

    return (
        <div className="App">
            <Header/>
            <Router>
                <LeftSide/>
                <div style={{paddingTop: 60, paddingLeft: 200}}>
                    <Route exact path="/" component={DashboardV1}/>
                    <Route path={'/education/analytics'} component={Analytics}/>
                    <Route path={'/education/widgets'} component={Widgets}/>
                    <Route path={'/event_record'} component={EventRecord}/>
                    <Route path={'/professors/all_professors'} component={AllProfessors}/>
                    <Route path={'/professors/add_professors'} component={AddProfessors}/>
                    <Route path={'/professors/edit_professors'} component={AddProfessors}/>
                    <Route path={'/professors/professor_profile'} component={ProfessorProfile}/>
                    <Route path={'/students/all_students'} component={AllStudents}/>
                    <Route path={'/students/add_students'} component={AddProfessors}/>
                    <Route path={'/students/edit_students'} component={AddProfessors}/>
                    <Route path={'/students/student_profile'} component={ProfessorProfile}/>
                    <Route path={'/courses/all_courses'} component={AllCourses}/>
                    <Route path={'/courses/add_courses'} component={AddProfessors}/>
                    <Route path={'/courses/edit_courses'} component={AddProfessors}/>
                    <Route path={'/courses/courses_payment'} component={CoursesPayment}/>
                    <Route path={'/library/library_assets'} component={LibraryAssets}/>
                    <Route path={'/library/add_library_asset'} component={AddProfessors}/>
                    <Route path={'/library/edit_library_asset'} component={AddProfessors}/>
                    <Route path={'/departments/departments_list'} component={LibraryAssets}/>
                    <Route path={'/departments/add_departments'} component={AddProfessors}/>
                    <Route path={'/departments/edit_departments'} component={AddProfessors}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
