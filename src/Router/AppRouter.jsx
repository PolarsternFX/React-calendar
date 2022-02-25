
import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    //Link
} from "react-router-dom";

import CalendarScreen from '../Components/Calendar/CalendarScreen';
import LoginScreen from '../Components/Auth/LoginScreen';


const AppRouter = () => {
    return (
        <Router>
            <div>
            <Routes>
                <Route exact path="/" element = { <CalendarScreen /> } />
                <Route exact path="/login" element = { <LoginScreen /> } />
            </Routes>
            </div>
        </Router>

)};



export default AppRouter