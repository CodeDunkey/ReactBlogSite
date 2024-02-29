import { useContext } from "react"
import { UserContext } from "./Context/UserContextCreateProvider"
import { clientApi } from "../Utilities/ClientAPI";
export const useUserContext = () => { 
    


    const userContext = useContext(UserContext);
    
    const validateUserAndPassword = async ({userName, password}:{userName: string, password: string})=>{ // skal types med username og password
        
        let user = await clientApi.validateUserAndPassword(userName, password)
        
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