import { createContext } from "react";

export const AppThemeContext = createContext()

const AppThemeContextProvider = ({children}) => {
    return (
        <AppThemeContext.Provider>
            {children}
        </AppThemeContext.Provider>
    )
}

export default AppThemeContextProvider