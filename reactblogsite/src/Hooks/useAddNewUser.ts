
import { clientApi } from "../Utilities/ClientAPI"
export const useAddNewUser = () => {
    const addUser = ({userName, password, email, firstName, lastName}: { userName: string, password: string, email: string, firstName: string, lastName: string}) => {
        let newUser = clientApi.addUser(
            userName,
            password,
            email,
            firstName,
            lastName
            )
    }
    return {
        addUser
    }
}