import { Comment } from "../Types/Types";
import { clientApi } from "../Utilities/ClientAPI";

export const useAddCommentToComment = () => {

    const addCommentToComment = async ({ blogTitle, postTitle, blogUserName, comment, commentToComment }:
        { blogTitle: string, postTitle: string, blogUserName: string, comment: Comment, commentToComment: Comment }) => {
        return await clientApi.addCommentToComment(blogTitle, postTitle, blogUserName, comment, commentToComment);
    }

    return { addCommentToComment }
}
