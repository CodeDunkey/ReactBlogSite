import { Blog, Comment, Post } from "../Types/Types";
import { clientApi } from "../Utilities/ClientAPI";

export const useAddCommentToComment = () => {

    const addCommentToComment = async ({ blog, post, comment, commentToComment }:
        { blog: Blog, post: Post, comment: Comment, commentToComment: Comment }) => {
        return await clientApi.addCommentToComment(blog, post, comment, commentToComment);
    }

    return { addCommentToComment }
}
