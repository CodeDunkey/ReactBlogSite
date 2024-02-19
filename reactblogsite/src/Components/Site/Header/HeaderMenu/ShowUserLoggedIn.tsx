import { useLogIn } from "../../../../Hooks/useLogIn"
import './ShowUserLoggedIn.scss'
export const ShowUserLoggedIn = () => {
    const { userName, isUserValidated } = useLogIn();
    return (
        <div className="showUserLoggedIn">
            {isUserValidated && <div>You are logged in as: {userName}</div>}
        </div>
    )
}