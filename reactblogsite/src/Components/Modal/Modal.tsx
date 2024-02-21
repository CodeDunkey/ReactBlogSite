import ReactModal from "react-modal";
import './Modal.scss'
import { useRef, useState } from "react"
import { useUser } from "../../Hooks/useUser";
import { Button, Type } from "../Button/Button";

export const ModalSignIn = () => {
    const [logIn, setLogIn] = useState(false)
    const [singUp, setSignUp] = useState(false)
    
    const [keyDown, setKeyDown] = useState()
    let inputUser = useRef<string>("")
    let inputPassword = useRef<string>("")
    const {isUserValidated, setIsUserValidated, setUser, validateUserAndPassword } = useUser();

   

    const keyPress = (event: any) => {
        setKeyDown(event.key)
    }
    if (keyDown === 'Enter') {
        
        if(inputUser.current !== "" && inputPassword.current !== ""){
            validateUserAndPassword({userName: inputUser.current, password: inputPassword.current});
            
        }
        inputUser.current = "";
        inputPassword.current = "";
    }
    
    const textInputUser = (x: any) => {
        inputUser.current = x.target.value;
    }
    const textInputPassword = (x: any) => {
        inputPassword.current = x.target.value
    }

    const toggleLogIn = () => {
        setLogIn(!logIn)
    }
    const toggleLogOut = () => {
        setUser({
            userName:"",
            userId: 0,
            createdDateTime: "", 
            email: "", 
            password: "", 
            firstName: "",
            lastName:"",
    
        })
        setIsUserValidated(false)
        setLogIn(!logIn)
    }
    const toggleSignUp = () => {
        setSignUp(!singUp)
    }

    const reactModalStyles: any = {
        overlay: {
            backgroundColor: "rgba(150, 150, 150, 0.75)"
        },
        content: {
            position: 'absolute',
            top: '100px',
            left: '500px',
            right: '500px',
            bottom: '200px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '40px'
            
        }
    }
   
    return (
        <div>
            {/* <button className="signUp" onClick={toggleSignUp}>Sign up</button> */}
            {!isUserValidated && <Button buttonType={Type.LOGIN} text="Log in" onClick={toggleLogIn}/>}
            {isUserValidated && <Button buttonType={Type.LOGIN} text="Log out" onClick={toggleLogOut}/>}
            <ReactModal style={{ overlay: reactModalStyles.overlay, content: reactModalStyles.content }} isOpen={logIn && !isUserValidated} >
                <input onChange={textInputUser} onKeyDown={keyPress} placeholder='User Name & email'></input>
                <input onChange={textInputPassword} onKeyDown={keyPress} placeholder='Password'></input>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleLogIn}></Button>
            </ReactModal>
        </div>
    )
}

