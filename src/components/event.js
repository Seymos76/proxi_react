import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import "../assets/scss_old/components/event.scss"

const Event = ({event}) => {
    const eventStart = new Date(event.start)
    return (
        <div className='Event'>
            <div className="Event-header" style={{ borderColor: event.color }}>
                <FontAwesomeIcon icon={faPaw} color={event.color} />
                <h2 style={{ color: event.color }}>{event.name}</h2>
                <span>{eventStart.toLocaleTimeString().substring(0,5)}</span>
            </div>
        </div>
    )
}

export default Event
