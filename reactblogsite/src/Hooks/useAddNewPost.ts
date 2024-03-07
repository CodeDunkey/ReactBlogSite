import { Post } from "../Types/Types";
import { clientApi } from "../Utilities/ClientAPI";

export const useAddNewPost = () => {

    const addNewPost = async ({blogTitle, userName, post}: {blogTitle: string, userName: string, post: Post}) => {
        return await clientApi.addNewPost(blogTitle, userName, post)
    }
    return { addNewPost }
}