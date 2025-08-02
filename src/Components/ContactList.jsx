import React from 'react'
import { useState } from 'react'
import ContactItem from './ContactItem'

const ContactList = ({contacts}) => {
    return (
        <div>
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact}/>
            ))}
        </div>
    );
};

export default ContactList;