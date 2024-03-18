import { clientApi } from "../Utilities/ClientAPI"
import { User } from "../Types/Types"

export const useEditUserInfo = () => {
    const editUserInfo = async ({user, userInfoEdited}: {user: User, userInfoEdited: User}) => {
        return await clientApi.editUserInfo(user, userInfoEdited)
    }
    return { editUserInfo }
}