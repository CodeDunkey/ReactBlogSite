import { ReactElement, createContext, useContext, useState } from "react";
import { User } from "../../Types/Types";
export type UserContextValue = {
    user: User,
    setUser: (user: User)=> void,
    isUserValidated: boolean,
    setIsUserValidated: (isUserValidated: boolean)=> void,
}

export const UserContext = createContext<UserContextValue>({
    user: {
        userName:"",
        userId: 0,
        createdDateTime: "", 
        email: "", 
        password: "", 
        firstName: "",
        lastName:"",

    },
    setUser: ()=>{},
    isUserValidated: false,
    setIsUserValidated: ()=> {},
    
});

export const LogInContextProvider = ({ children }: { children: ReactElement }) => {

    const [user, setUser] = useState<User>({
        userName:"",
        userId: 0,
        createdDateTime: "", 
        email: "", 
        password: "", 
        firstName: "",
        lastName:"",

    })
    const [isUserValidated, setIsUserValidated] = useState<boolean>(false)
    // console.log("user in provider", user)
    return (
        <UserContext.Provider value={{user, setUser, isUserValidated, setIsUserValidated}}>
            {children}
        </UserContext.Provider>
    )
}
