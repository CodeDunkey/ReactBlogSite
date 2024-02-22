import ReactModal from "react-modal";
import './Modal.scss'
import { useRef, useState } from "react"
import { useUser } from "../../Hooks/useUser";
import { useAddNewUser } from "../../Hooks/useAddNewUser";
import { Button, Type } from "../Button/Button";

export const ModalSignIn = () => {
    const [logIn, setLogIn] = useState(false)
    const [singUp, setSignUp] = useState(false)

    const [keyDown, setKeyDown] = useState()
    let inputUser = useRef<string>("")
    let inputPassword = useRef<string>("")
    let inputEmail = useRef<string>("")
    let inputFirstName = useRef<string>("")
    let inputLastName = useRef<string>("")

    const { isUserValidated, setIsUserValidated, setUser, validateUserAndPassword } = useUser();
    const { addUser } = useAddNewUser();


    const keyPress = (event: any) => {
        setKeyDown(event.key)
    }
    if (logIn && keyDown === 'Enter') {

        if (inputUser.current !== "" && inputPassword.current !== "") {
            validateUserAndPassword({ userName: inputUser.current, password: inputPassword.current });

        }
        inputUser.current = "";
        inputPassword.current = "";
    }
    if (singUp && keyDown === 'Enter') {

        if (
            inputUser.current !== "" &&
            inputPassword.current !== "" &&
            inputEmail.current !== "" &&
            inputFirstName.current !== "" &&
            inputLastName.current !== ""
        ) {
            addUser({
                userName: inputUser.current,
                password: inputPassword.current,
                email: inputEmail.current,
                firstName: inputFirstName.current,
                lastName: inputLastName.current,
            });

        }
        inputUser.current = "";
        inputPassword.current = "";
        inputEmail.current = "";
        inputFirstName.current = "";
        inputLastName.current = "";
        setSignUp(!singUp)
    }

    const textInputUser = (x: any) => {
        inputUser.current = x.target.value;
    }
    const textInputPassword = (x: any) => {
        inputPassword.current = x.target.value
    }
    const textinputEmail = (x: any) => {
        inputEmail.current = x.target.value;
    }
    const textinputFirstName = (x: any) => {
        inputFirstName.current = x.target.value
    }
    const textinputLastName = (x: any) => {
        inputLastName.current = x.target.value;
    }

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
    // youtube
    // Login and Registration Form using React + Node + MySQL | Login and Sign Up Form with Validation
    return (
        <div className="modalWrapper">

            {!logIn && <Button buttonType={Type.SIGNUP} text="Sign up" onClick={toggleSignUp}></Button>}
            {!isUserValidated && <Button buttonType={Type.LOGIN} text="Log in" onClick={toggleLogIn} />}
            {isUserValidated && <Button buttonType={Type.LOGIN} text="Log out" onClick={toggleLogOut} />}
            <ReactModal style={{ overlay: reactModalStyles.overlay, content: reactModalStyles.content }} isOpen={logIn && !isUserValidated} >
                <input onChange={textInputUser} onKeyDown={keyPress} placeholder='User Name'></input>
                <input onChange={textInputPassword} onKeyDown={keyPress} placeholder='Password'></input>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleLogIn}></Button>
            </ReactModal>
            <ReactModal style={{ overlay: reactModalStyles.overlay, content: reactModalStyles.content }} isOpen={singUp} >
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

