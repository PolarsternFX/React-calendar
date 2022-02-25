
import React, { useState } from 'react'

import Navbar from './../UI/NavBar';

import 'react-big-calendar/lib/css/react-big-calendar.css'

import {Calendar, momentLocalizer}  from 'react-big-calendar'
import moment from 'moment'

import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';

const localizer = momentLocalizer(moment)

const events = [{
    title: 'Birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),

    user: {
        id: '1',
        name: 'Polarstern',
    }
}]

const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView' || 'month'))

    const onDobleClick = (e) => {
        lastView(e);
    }

    const onSelectEvent = (e) => {
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    return (
        <>
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 850 }}
                onDoubleClickEvent={ onDobleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                components={{
                    event: CalendarEvent
                }} 
            />

            <CalendarModal />


        </>
    )
};

export default CalendarScreen;