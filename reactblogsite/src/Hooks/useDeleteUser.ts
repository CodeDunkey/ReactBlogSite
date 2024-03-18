import { clientApi } from "../Utilities/ClientAPI";
import { User } from "../Types/Types";
export const useDeleteUser = () => {
    const deleteUser = async({user}: {user: User}) => {
        return await clientApi.deleteUser(user)
    }
    return { deleteUser }
}