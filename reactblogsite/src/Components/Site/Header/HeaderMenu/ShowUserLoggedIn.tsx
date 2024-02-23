import { useUser } from "../../../../Hooks/useUser"
import './ShowUserLoggedIn.scss'
export const ShowUserLoggedIn = () => {
    const { user } = useUser();
    // , isUserValidated
    return (
        <div className="showUserLoggedIn">
            {
                user
            // isUserValidated 
            && <div>You are logged in as: {user.userName}</div>}
        </div>
    )
}