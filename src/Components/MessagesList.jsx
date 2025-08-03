import React from 'react'
import Message from './Message'

const MessagesList = ({messages, deleteMessageById}) => {
    

    const lista_mensajes = messages.map(
        function (message){
            return (
            <Message
            key={message.id}
            emisor= {message.emisor}
            hora= {message.hora}
            id= {message.id}
            texto= {message.texto}
            status= {message.status}
            deleteMessageById= {deleteMessageById}
            />
            )
        }
    )
    
    return (
        <div className='messages__container'>
            {lista_mensajes}
        </div>
    )
}

export default MessagesList