import React, {createContext} from 'react'

export const ContactContext = createContext()

const ContactContextProvider = ({children}) => {

    return (
        <ContactContext.Provider>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider