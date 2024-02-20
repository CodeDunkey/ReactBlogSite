import { useContext } from "react"
import { LogInContext } from "./Context/LogInContextCreateProvider"
import { clientApi } from "../Utilities/ClientAPI";
export const useLogIn = () => { 
    
    const logInContext = useContext(LogInContext);
    
    const validateUserAndPassword = ({userName, password}: any)=>{ // skal types med username og password
        
        let userAndPassword = clientApi.validateUserAndPassword({userName, password, setUserName: logInContext.setUserName, setIsUserValidated: logInContext.setIsUserValidated})
        // console.log("userAndPassword in useLogIn", userAndPassword)
    }
    return {
        
        userName: logInContext.userName,
        isUserValidated: logInContext.isUserValidated,
        setIsUserValidated: logInContext.setIsUserValidated,
        validateUserAndPassword,
    }

}
