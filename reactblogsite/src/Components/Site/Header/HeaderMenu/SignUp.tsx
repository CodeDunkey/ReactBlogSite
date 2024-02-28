import { useRef, ChangeEvent, KeyboardEvent } from "react"
import { useLogInSignUp } from "../../../../Hooks/useLogInSignUpContext"
import { Button, Type } from "../../../Button/Button"
import { useAddNewUser } from "../../../../Hooks/useAddNewUser"
import ReactModal from "react-modal"
export const SignUp = () => {

    const { logIn, signUp, setSignUp, keyDown, setKeyDown } = useLogInSignUp()
    const { addUser } = useAddNewUser()

    let inputUser = useRef<string>()
    let inputPassword = useRef<string>()
    let inputEmail = useRef<string>()
    let inputFirstName = useRef<string>()
    let inputLastName = useRef<string>()
   
    const toggleSignUp = () => {
        setSignUp(!signUp)
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
    const textinputEmail = (x: ChangeEvent<HTMLInputElement>) => {
        inputEmail.current = x.target.value;
    }
    const textinputFirstName = (x: ChangeEvent<HTMLInputElement>) => {
        inputFirstName.current = x.target.value
    }
    const textinputLastName = (x: ChangeEvent<HTMLInputElement>) => {
        inputLastName.current = x.target.value;
    }
    
    if (signUp && keyDown === 'Enter') {

        if (
            inputUser.current !== undefined &&
            inputPassword.current !== undefined &&
            inputEmail.current !== undefined &&
            inputFirstName.current !== undefined &&
            inputLastName.current !== undefined
        ) {
            addUser({
                userName: inputUser.current,
                password: inputPassword.current,
                email: inputEmail.current,
                firstName: inputFirstName.current,
                lastName: inputLastName.current,
            });

        }
        inputUser.current = undefined;
        inputPassword.current = undefined;
        inputEmail.current = undefined;
        inputFirstName.current = undefined;
        inputLastName.current = undefined;
        setSignUp(!signUp)
    }

    const reactModalStyles = {
        overlay: {
            backgroundColor: "rgba(150, 150, 150, 0.75)"
        },
    }
    const reactModalcontent: React.CSSProperties = {
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

    return (
        <div>
            {!logIn && <Button buttonType={Type.SIGNUP} text="Sign up" onClick={toggleSignUp}></Button>}
            <ReactModal style={{ overlay: reactModalStyles.overlay, content: reactModalcontent }} isOpen={signUp} >
                <label htmlFor="user name" >User name</label>
                <input id="user name" onChange={textInputUser} onKeyDown={keyPress} placeholder='User Name'></input>
                <br></br>
                <label htmlFor="password" >Password</label>
                <input id="password" onChange={textInputPassword} onKeyDown={keyPress} placeholder='Password'></input>
                <br></br>
                <label htmlFor="email" >Email</label>
                <input id="email" onChange={textinputEmail} onKeyDown={keyPress} placeholder='Email'></input>
                <br></br>
                <label htmlFor="first name" >First name</label>
                <input id="first name" onChange={textinputFirstName} onKeyDown={keyPress} placeholder='First name'></input>
                <br></br>
                <label htmlFor="Last name" >Last name</label>
                <input id="Last name" onChange={textinputLastName} onKeyDown={keyPress} placeholder='Last name'></input>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleSignUp}></Button>
            </ReactModal>
        </div>
    )
}