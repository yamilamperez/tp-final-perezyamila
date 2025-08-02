import React, {useContext, useState} from 'react'
import ChatScreen from './Screens/ChatScreen'
import ContactScreen from './Screens/ContactScreen'
import { Route, Routes } from 'react-router'
import { ContactContext } from './Context/ContactContext'


const App = () => {

return (
    <div>
        <Routes>
            <Route
                path='/'
                element={<ContactScreen/>}
            />
            <Route 
                path='/contact/:contact_id/messages' 
                element={<ChatScreen/>}
            />
        </Routes>
    </div>
)

}




export default App