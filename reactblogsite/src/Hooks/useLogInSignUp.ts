import { useContext } from "react"
import { LogInSignUpContext } from "./Context/LogInSignUpContextCreateProvider";

export const useLogInSignUp = () => { 
    
    const logInSignUpContext = useContext(LogInSignUpContext);
    
    return {
        
        logIn: logInSignUpContext.logIn,
        setLogIn: logInSignUpContext.setLogIn,
        
    }

}