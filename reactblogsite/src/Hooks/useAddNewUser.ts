import { clientApi } from "../Utilities/ClientAPI"
export const useAddNewUser = () => {
    const addUser = ({userName, password, email,
        firstName,
        lastName}: any) => {
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