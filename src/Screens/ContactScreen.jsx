import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import ContactList from '../Components/ContactList'
import { getContactList } from '../Services/contactService'


const ContactScreen = () => {

const contacts = getContactList()
const [contactsState, setContactsState] = useState(contacts)

return (
    <div>
      <h1>Chats</h1>
      <ContactList contacts={contactsState}/>
    </div>
  )
}

export default ContactScreen;
