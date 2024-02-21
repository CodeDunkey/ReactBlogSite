import { useUser } from "../../../../Hooks/useUser"
import './ShowUserLoggedIn.scss'
export const ShowUserLoggedIn = () => {
    const { user, isUserValidated } = useUser();
    return (
        <div className="showUserLoggedIn">
            {isUserValidated && <div>You are logged in as: {user.userName}</div>}
        </div>
    )
}