import { ReactElement, createContext, useState, useRef, MutableRefObject } from "react"

export type LogInSignUpContextValue = {
    logIn: boolean,
    setLogIn: (logIn: boolean) => void,
    singUp: boolean,
    setSignUp: (signUp: boolean) => void,
    keyDown: string,
    setKeyDown: (keyDown: string) => void,

}
export const LogInSignUpContext = createContext<LogInSignUpContextValue>({
    logIn: false,
    setLogIn: () => { },
    singUp: false,
    setSignUp: () => { },
    keyDown: "",
    setKeyDown: () => { },

});

export const LogInSignUpContextProvider = ({ children }: { children: ReactElement }) => {
    const [logIn, setLogIn] = useState<boolean>(false)
    const [singUp, setSignUp] = useState(false)
    const [keyDown, setKeyDown] = useState("")

    return (
        <LogInSignUpContext.Provider value={{
            logIn,
            setLogIn,
            singUp,
            setSignUp,
            keyDown,
            setKeyDown,
        }}>
            {children}
        </LogInSignUpContext.Provider>
    )
}