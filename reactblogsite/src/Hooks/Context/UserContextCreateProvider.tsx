import { ReactElement, createContext, useState } from "react";
import { User } from "../../Types/Types";

export type UserContextValue = {
    user?: User,
    setUser:  (user: User)=>void,
    // isUserValidated: boolean,
    // setIsUserValidated: (isUserValidated: boolean)=> void,
}

export const UserContext = createContext<UserContextValue>({
    // user
    // : 
    // {
    //     userName:"",
    //     userId: 0,
    //     createdDateTime: "", 
    //     email: "", 
    //     password: "", 
    //     firstName: "",
    //     lastName:"",

    // }
    // ,
    setUser: (user: User)=>{},
    // isUserValidated: false,
    // setIsUserValidated: ()=> {},
    
});

export const UserContextProvider = ({ children }: { children: ReactElement }) => {

    const [user, setUser] = useState<User>()
    
    // const [isUserValidated, setIsUserValidated] = useState<boolean>(false)
    // console.log("user in provider", user)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// , isUserValidated, setIsUserValidated