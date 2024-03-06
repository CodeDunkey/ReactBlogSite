import { ShowUserLoggedIn } from "./ShowUserLoggedIn"
import { CreateNewBlog } from "./CreateNewBlog"
import { SignUp } from "./SignUp"
import { LogIn } from "./LogIn"
import './HeaderMenu.scss'

export const HeaderMenu = () => {
    return (
        <div className="headerMenu">
            <div className="headerMenuItem"><CreateNewBlog /></div>
            <div className="headerMenuItem"><ShowUserLoggedIn /></div>
            <div className="headerMenuItem"><SignUp /></div>
            <div className="headerMenuItem"><LogIn /></div>
        </div>
    )
}