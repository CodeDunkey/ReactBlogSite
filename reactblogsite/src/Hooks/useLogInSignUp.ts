import { useContext } from "react"
import { LogInSignUpContext } from "./Context/LogInSignUpContextCreateProvider";

export const useLogInSignUp = () => { 
    
    const logInSignUpContext = useContext(LogInSignUpContext);
    
    return {
        
        logIn: logInSignUpContext.logIn,
        setLogIn: logInSignUpContext.setLogIn,
        setKeyDown: logInSignUpContext.setKeyDown,
        inputUser: logInSignUpContext.inputUser,
        inputPassword: logInSignUpContext.inputPassword,
    }

}