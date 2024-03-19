import { Blog } from "../Types/Types"
import { clientApi } from "../Utilities/ClientAPI"
export const useEditBlogInfo = () => {
    const editBlogInfo = async ({blog}:{blog: Blog}) => {
        return await clientApi.editBlog(blog)
    }
    return { editBlogInfo }
}