import React from 'react'
import { Link } from 'react-router'

const ContactItem = ({contact}) => {
    return(
        <Link to={`/contact/${contact.id}/messages`}>
            <h2>{contact.name}</h2>
            <img src={contact.avatar} alt={contact.name} style={{width:"50px", height:"50px"}}/>
            <span>Última conexión:{contact.lastConnection}</span>
            <span>Estado:{contact.connectionStatus}</span>
        </Link>
    )
}

export default ContactItem;