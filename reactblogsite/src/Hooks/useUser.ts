import { useContext } from "react"
import { UserContext } from "./Context/UserContextCreateProvider"
import { clientApi } from "../Utilities/ClientAPI";
export const useUser = () => { 
    
    const userContext = useContext(UserContext);
    
    const validateUserAndPassword = ({userName, password}:{userName: string, password: string})=>{ // skal types med username og password
        
        let user = clientApi.validateUserAndPassword(userName, password)
        console.log("userAndPassword in useLogIn", user)
        if(user !== undefined){
            userContext.setUser(user)
        }
    }
    return {
        user: userContext.user,
        setUser: userContext.setUser,
        validateUserAndPassword,
    }

}
