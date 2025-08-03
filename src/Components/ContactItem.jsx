import React from 'react'
import { Link } from 'react-router'
import "./ContactItem.css"

const ContactItem = ({contact}) => {
    return(
            <Link to={`/contact/${contact.id}/messages`} className='link__contact'>
                <div className='contact__container'>
                    <div className='avatar__container'>
                        <img src={contact.avatar} alt={contact.name} style={{width:"50px", height:"50px"}}/>
                    </div>
                    <div className='contact__details'>
                        <p className='contact__name'>{contact.name}</p>
                        <span className='contact__connection'>{contact.lastConnection}</span>
                    </div>
                </div>    
            </Link>
    )
}

export default ContactItem;