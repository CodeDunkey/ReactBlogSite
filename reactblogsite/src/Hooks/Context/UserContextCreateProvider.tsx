import { ReactElement, createContext, useState } from "react";
import { User } from "../../Types/Types";

export type UserContextValue = {
    user?: User,
    setUser:  (user: User | undefined)=>void,
}

export const UserContext = createContext<UserContextValue>({
    setUser: ()=>{},
});

export const UserContextProvider = ({ children }: { children: ReactElement }) => {
    const [user, setUser] = useState<User>()
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}