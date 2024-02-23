import { useState } from "react"
import { useLogInSignUp } from "../../../../Hooks/useLogInSignUp"
import { Button, Type } from "../../../Button/Button"
import ReactModal from "react-modal"
export const SignUp = () => {
    
    const [singUp, setSignUp] = useState(false)
    const { logIn, setLogIn} = useLogInSignUp()

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
            {!logIn && <Button buttonType={Type.SIGNUP} text="Sign up" onClick={toggleSignUp}></Button>}
            <ReactModal style={{ overlay: reactModalStyles.overlay, content: reactModalStyles.content }} isOpen={singUp} >
                <label htmlFor="user name" >User name</label>
                {/* <input id="user name" onChange={textInputUser} onKeyDown={keyPress} placeholder='User Name'></input> */}
                <br></br>
                <label htmlFor="password" >Password</label>
                {/* <input id="password" onChange={textInputPassword} onKeyDown={keyPress} placeholder='Password'></input> */}
                <br></br>
                <label htmlFor="email" >Email</label>
                {/* <input id="email" onChange={textinputEmail} onKeyDown={keyPress} placeholder='Email'></input> */}
                <br></br>
                <label htmlFor="first name" >First name</label>
                {/* <input id="first name" onChange={textinputFirstName} onKeyDown={keyPress} placeholder='First name'></input> */}
                <br></br>
                <label htmlFor="Last name" >Last name</label>
                {/* <input id="Last name" onChange={textinputLastName} onKeyDown={keyPress} placeholder='Last name'></input> */}
                <Button buttonType={Type.EXIT} text="X" onClick={toggleSignUp}></Button>
            </ReactModal>
        </div>
    )
}