import { Comment } from "../Types/Types";
import { clientApi } from "../Utilities/ClientAPI";

export const useAddNewComment = () => {

    const addNewComment = async ({ comment }: 
        { comment: Comment }) => {
        return await clientApi.addNewComment( comment )
    }
    return { addNewComment }
}