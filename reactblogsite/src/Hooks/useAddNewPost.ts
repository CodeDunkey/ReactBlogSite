import { Blog, Post } from "../Types/Types";
import { clientApi } from "../Utilities/ClientAPI";

export const useAddNewPost = () => {

    const addNewPost = async ({blog, post}: {blog: Blog, post: Post}) => {
        return await clientApi.addNewPost(blog, post)
    }
    return { addNewPost }
}