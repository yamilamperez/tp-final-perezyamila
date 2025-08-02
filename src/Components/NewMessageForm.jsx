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
        <form onSubmit={handleSubmitSendMessageForm}>
            <div className='form__container'>
                <label className='form__label' htmlFor="message">Escribe un mensaje</label>
                <input type="text" placeholder='Escribe un mensaje' id='message' name='message' required className='form__input'/>
                <button className='submit__button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg>
                </button>
            </div>
        </form>

)

}

export {NewMessageForm}