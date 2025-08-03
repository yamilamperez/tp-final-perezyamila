import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {

    const handleSubmitSendMessageForm = (event) => {
    event.preventDefault()
    let new_message_text = event.target.message.value
    addNewMessage(new_message_text)
    event.target.message.value = ''
}

    return (
        <div>
                <form onSubmit={handleSubmitSendMessageForm} className='form'>
                        <label className='form__label' htmlFor="message">Escribe un mensaje</label>
                        <input type="text" placeholder='Escribe un mensaje' id='message' name='message' required className='form__input'/>
                </form>
        </div>
)

}

export {NewMessageForm}