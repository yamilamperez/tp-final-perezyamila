import React, {useState} from 'react'
import { useParams } from 'react-router'
import MessagesList from '../Components/MessagesList'
import ContactScreen from './ContactScreen'
import {NewMessageForm} from '../Components/NewMessageForm'
import { getContactById } from '../Services/contactService'
import './ChatScreen.css'

const ChatScreen = () => {
    
    const {contact_id} = useParams()
    const contact_selected = getContactById(contact_id)

    const [messages, setMessages] = useState(contact_selected.messages)

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
            
    <MessagesList messages = {messages} deleteMessageById={deleteMessageById}/>
    <NewMessageForm addNewMessage={addNewMessage}/>
        </div>
    )

}

export default ChatScreen