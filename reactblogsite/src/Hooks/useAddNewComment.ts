import { Comment } from "../Types/Types";
import { clientApi } from "../Utilities/ClientAPI";

export const useAddNewComment = () => {

    const addNewComment = async ({ postTitle, blogTitle, blogUserName, comment }: { postTitle: string, blogTitle: string, blogUserName: string, comment: Comment }) => {
        return await clientApi.addNewComment( postTitle, blogTitle, blogUserName, comment )
    }
    return { addNewComment }
}