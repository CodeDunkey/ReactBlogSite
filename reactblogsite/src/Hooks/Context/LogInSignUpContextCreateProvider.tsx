import { ReactElement, createContext, useState } from "react"

export type LogInSignUpContextValue = {
    logIn: boolean,
    setLogIn: (logIn: boolean) => void,
}
export const LogInSignUpContext = createContext<LogInSignUpContextValue>({
    logIn: false,
    setLogIn: ()=>{},
});

export const LogInSignUpContextProvider = ({children}: {children: ReactElement}) => {
    
    const [logIn, setLogIn] = useState<boolean>(false)

    return (
        <LogInSignUpContext.Provider value={{logIn, setLogIn}}>
            {children}
        </LogInSignUpContext.Provider>
    )
}