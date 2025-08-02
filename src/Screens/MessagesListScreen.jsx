import React from 'react'
import Message from '../Components/Message'

const MessageList = ({messages}) => {
    const lista_mensajes = messages.map(
        function (message){
        return (
        <Message
        emisor= {message.emisor}
        hora= {message.hora}
        id= {message.id}
        texto= {message.texto}
        status= {message.status}
        />
        )
    }
    )
    return (
    <div>
        {lista_mensajes}
    </div>
    )
}

export default MessagesListScreen