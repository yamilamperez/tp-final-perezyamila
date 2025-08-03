import React from "react"

const ContactInfo = ({contact}) => {
    return (
        <div className="contact__info">
            <img src={contact.avatar} alt={contact.name} />
            <div className="contact__info__name">{contact.name}</div>
        </div>
    )
}

export default ContactInfo