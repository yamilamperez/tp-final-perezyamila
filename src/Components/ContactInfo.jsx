import React from "react";
import { Link } from "react-router";
import './ContactInfo.css'

const ContactInfo = ({contact}) => {

    return(
            <div className="contact__header">
                <Link to={'/'} className="contact__header__items">
                <button className="return__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-arrow-return-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </button>
                <img src={contact.avatar} alt={contact.name} style={{width:"50px", height:"50px", borderRadius:"50%"}}/>
                <span className="contact__header__name">{contact.name}</span>
                </Link>
            </div>
    )


}

export default ContactInfo