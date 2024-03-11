import { Comment } from "../Types/Types";
import { clientApi } from "../Utilities/ClientAPI";

export const useAddNewComment = () => {

    const addNewComment = async ({ blogTitle, postTitle, blogUserName, comment }: 
        { blogTitle: string, postTitle: string,  blogUserName: string, comment: Comment }) => {
        return await clientApi.addNewComment( blogTitle, postTitle, blogUserName, comment )
    }
    return { addNewComment }
}