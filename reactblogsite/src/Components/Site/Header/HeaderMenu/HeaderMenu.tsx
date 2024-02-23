import { ShowUserLoggedIn } from "./ShowUserLoggedIn"
import { NewBlog } from "./NewBlog"
import { SignUp } from "./SignUp"
import { LogIn } from "./LogIn"
import './HeaderMenu.scss'

export const HeaderMenu = () => {
    return (
        <div className="headerMenu">
            <NewBlog />
            <ShowUserLoggedIn />
            <SignUp />
            <LogIn />
        </div>
    )
}