import { Post } from "../Types/Types";
import { clientApi } from "../Utilities/ClientAPI";

export const useAddNewPost = () => {

    const addNewPost = async ({blogTitle, blogIdNumber, userName, post}: {blogTitle: string, blogIdNumber: number, userName: string, post: Post}) => {
        return await clientApi.addNewPost(blogTitle, blogIdNumber,userName, post)
    }
    return { addNewPost }
}