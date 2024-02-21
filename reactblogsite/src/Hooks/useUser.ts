import { useContext } from "react"
import { UserContext } from "./Context/UserContextCreateProvider"
import { clientApi } from "../Utilities/ClientAPI";
export const useUser = () => { 
    
    const userContext = useContext(UserContext);
    
    const validateUserAndPassword = ({userName, password}: any)=>{ // skal types med username og password
        
        let user = clientApi.validateUserAndPassword(userName, password)
        console.log("userAndPassword in useLogIn", user)
        if(user !== undefined){
            userContext.setUser(user)
            userContext.setIsUserValidated(true)
        }
    }
    return {
        
        user: userContext.user,
        setUser: userContext.setUser,
        isUserValidated: userContext.isUserValidated,
        setIsUserValidated: userContext.setIsUserValidated,
        validateUserAndPassword,
    }

}
