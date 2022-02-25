
import React from 'react';

const CalendarEvent = ({event}) => {

    const {title, name} = event;

    return (
        <div>
            <span> Event: </span>
            <span> { title } </span>
            <span> { name } </span>            
        </div>

)
};

export default CalendarEvent;
