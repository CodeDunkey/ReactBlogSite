import ReactModal from "react-modal";
import './Modal.scss'
import { useRef, useState } from "react"
import { useUserName, useSetUserName } from "../../Hooks/useContext/SignInContextCreateProvider";
import { Button, Type } from "../Button/Button";

export const ModalSignIn = () => {

    const [singIn, setSignIn] = useState(false)
    const [singUp, setSignUp] = useState(false)
    // const [userNameMail, setUserNameMail] = useState()
    const [password, setPassword] = useState<string>()
    const [keyDown, setKeyDown] = useState()
    let inputUser = useRef<any>("")
    const inputPassword = useRef<string>()

   const userName = useUserName()
   const setUserName = useSetUserName()

    const keyPress = (event: any) => {
        setKeyDown(event.key)

    }
    if (keyDown === 'Enter') {
        console.log('enter pressed');

        setUserName(inputUser.current)

    }
    const textInputUser = (x: any) => {
        inputUser.current = x.target.value;
    }
    const textInputPassword = (x: any) => {
        setPassword(x.target.value)
    }

    const toggleSignIn = () => {
        setSignIn(!singIn)
    }
    const toggleSignUp = () => {
        setSignUp(!singUp)
    }
    const reactModalStyles: any = {
        overlay: {
            backgroundColor: "rgba(150, 150, 150, 0.5)"
        },
        content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '40px'
        }
    }

    console.log('inputUser', inputUser);
    console.log('userName in Modal', userName);
    return (
        <div>
            <button className="signUp" onClick={toggleSignUp}>Sign up</button>
            <Button buttonType={Type.SINGIN} text="Sign in" onClick={toggleSignIn}/>
            
            <ReactModal style={{ overlay: reactModalStyles.overlay, content: reactModalStyles.content }} isOpen={singIn} >
                <button onClick={toggleSignIn}>X</button>

                <input onChange={textInputUser} onKeyDown={keyPress} placeholder='User Name & email'></input>
                {inputUser.current}{keyDown}
                <input value={password} onChange={textInputPassword} placeholder='Password'></input>
                {password}
            </ReactModal>
        </div>
    )
}