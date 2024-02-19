import { ReactElement, createContext, useContext, useState } from "react";

export type LogInContextValue = {
    userName: string,
    setUserName: (userName: string)=> void,
    isUserValidated: boolean,
    setIsUserValidated: (isUserValidated: boolean)=> void,
    // password: string,
    // setPassword: (password: string)=> void,
    // isPasswordValidated: boolean,
    // setIsPasswordValidated: (isPasswordValidated: boolean)=> void,
}

export const LogInContext = createContext<LogInContextValue>({
    userName: "",
    setUserName: ()=>{},
    isUserValidated: false,
    setIsUserValidated: ()=> {},
    // password: "",
    // setPassword: ()=>{},
    // isPasswordValidated: false,
    // setIsPasswordValidated: ()=> {},
});

export const LogInContextProvider = ({ children }: { children: ReactElement }) => {

    const [userName, setUserName] = useState<string>("")
    // const [password, setPassword] = useState<string>("")
    const [isUserValidated, setIsUserValidated] = useState<boolean>(false)
    // const [isPasswordValidated, setIsPasswordValidated] = useState<boolean>(false)
    
    // console.log('userName in provider: ', userName, " ", "isUserValidated in provider: ", isUserValidated);

    return (
        <LogInContext.Provider value={{userName, setUserName, isUserValidated, setIsUserValidated}}>
            {children}
        </LogInContext.Provider>
    )
}
// , password, setPassword, isPasswordValidated, setIsPasswordValidated