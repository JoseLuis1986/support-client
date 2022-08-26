import React from 'react'
import { hoursMonth } from '../helpers/hoursMonth';


export const OutgoingMessage = ({ msg }) => {
    console.log( msg );
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{ msg.message }</p>
                <span className="time_date">{ hoursMonth( msg.createdAt ) }</span>
            </div>
        </div>

    )
}
