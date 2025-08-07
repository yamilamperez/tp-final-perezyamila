import React, {useState} from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import MessagesList from '../Components/MessagesList'
import {NewMessageForm} from '../Components/NewMessageForm'
import { getContactById } from '../Services/contactService'
import ContactScreen from './ContactScreen'
import ContactInfo from '../Components/ContactInfo'
import { createPortal } from 'react-dom'


const ChatScreen = () => {
    
    const {contact_id} = useParams()
    const contact_selected = getContactById(Number(contact_id))
    const [messages, setMessages] = useState(contact_selected.messages)

    useEffect(() => {
        if (contact_selected) {
            setMessages(contact_selected.messages)
        }
    }, [contact_id])

    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for (const message of messages){
            if(message.id !== message_id){
                new_message_list.push(message)
            }
        }
        setMessages(new_message_list)
    }

    const addNewMessage = (text) => {
    
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const new_message = {
            emisor: 'Jengibre',
            hora: formattedTime,
            texto: text,
            status: 'no-visto',
            id: messages.length + 1
        }
    
        const cloned_message_list = [...messages]
        cloned_message_list.push(new_message)
        setMessages(cloned_message_list)
        
    }

    return (
        <div>
                <ContactScreen/>
                <ContactInfo contact = {contact_selected}/>
                <MessagesList messages = {messages} deleteMessageById={deleteMessageById}/>
                <NewMessageForm addNewMessage={addNewMessage}/>
        </div>
    )

}

export default ChatScreen