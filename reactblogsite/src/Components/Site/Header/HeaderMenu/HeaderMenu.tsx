import { useState } from "react"
import ReactModal from "react-modal";
import { ModalExample } from "../../../Modal/Modal"
import './HeaderMenu.scss'

export const HeaderMenu = () => {

    const [singIn, setSignIn] = useState(false)
    const [singUp, setSignUp] = useState(false)

    const toggleSignIn = () => {
        setSignIn(!singIn)
    }
    const toggleSignUp = () => {
        setSignUp(!singUp)
    }

    return (
        <div className="headerMenu">
            <button className="signUp" onClick={toggleSignUp}>Sign up</button>
            <button className="signIn" onClick={toggleSignIn}>Sign in</button>
            <ReactModal isOpen={singIn}>
                
                <button onClick={toggleSignIn}>X</button>
            </ReactModal>
        </div>
    )
}