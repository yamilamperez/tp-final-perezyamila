import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import ContactList from '../Components/ContactList'
import { getContactList } from '../Services/contactService'
import './ContactScreen.css'


const ContactScreen = () => {

const contacts = getContactList()
const [contactsState, setContactsState] = useState(contacts)

return (
    <div className='contact__screen'>
      <img src="/images/whatsapp-contactscreen.png" alt="aplicación whatsapp"/>
      <span className='contact__screen__title'>Descarga Whatsapp para Windows</span>
      <span className='contact__screen__subtitle'>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</span>
      <div className='contact__screen__button'>
        <span>Descargar</span>
      </div>
      {createPortal(
        <ContactList contacts={contactsState}/>, document.getElementById('chats')
      )}
    </div>
  )
}

export default ContactScreen;
