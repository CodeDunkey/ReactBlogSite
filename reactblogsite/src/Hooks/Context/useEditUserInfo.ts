import { clientApi } from "../../Utilities/ClientAPI"
import { User } from "../../Types/Types"

export const useEditUserInfo = () => {
    const editUserInfo = ({user, userInfoEdited}: {user: User, userInfoEdited: User}) => {
        let editedUserInfo = clientApi.editUserInfo(user, userInfoEdited)
    }
    return { editUserInfo }
}