import { useState } from "react"
import { ShowUserLoggedIn } from "./ShowUserLoggedIn"
import { ModalSignIn } from "../../../Modal/Modal"
import './HeaderMenu.scss'

export const HeaderMenu = () => {

    

   
    return (
        <div className="headerMenu">
            <ShowUserLoggedIn />
            <ModalSignIn />
        </div>
    )
}