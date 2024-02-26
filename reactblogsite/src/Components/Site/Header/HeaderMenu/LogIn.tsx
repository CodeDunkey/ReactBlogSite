import ReactModal from "react-modal";
import { useUser } from "../../../../Hooks/useUser";
import { useLogInSignUp } from "../../../../Hooks/useLogInSignUp";
import { Button, Type } from "../../../Button/Button"
import { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction } from "react";
export const LogIn = () => {
    
    const { user, setUser, validateUserAndPassword } = useUser();
    const {logIn, setLogIn, setKeyDown, inputUser, inputPassword } = useLogInSignUp()
    // isUserValidated, setIsUserValidated, 


    const toggleLogIn = () => {
        setLogIn(!logIn)
    }
    
    const toggleLogOut = () => {
        setUser({
            userName: "",
            userId: 0,
            createdDateTime: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        })
        // setIsUserValidated(false)
        setLogIn(!logIn)
    }
    const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key)
    }
    const textInputUser = (x: ChangeEvent<HTMLInputElement>) => {
        inputUser.current = x.target.value;
    }
    const textInputPassword = (x: ChangeEvent<HTMLInputElement>) => {
        inputPassword.current = x.target.value
    }

    const reactModalStyles = {
        overlay: {
            backgroundColor: "rgba(150, 150, 150, 0.75)"
        },
    }
    const modalContentStyles: React.CSSProperties = {
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
        padding: '40px',
    }
    
    return (
        <div>
            {!user && <Button buttonType={Type.LOGIN} text="Log in" onClick={toggleLogIn} />}
            {user && <Button buttonType={Type.LOGIN} text="Log out" onClick={toggleLogOut} />}
            <ReactModal style={{ overlay: reactModalStyles.overlay, content: modalContentStyles }} isOpen={logIn && !user} >
                <input onChange={textInputUser} onKeyDown={keyPress} placeholder='User Name'></input>
                <input onChange={textInputPassword} onKeyDown={keyPress} placeholder='Password'></input>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleLogIn}></Button>
            </ReactModal>
        </div>
    )
}