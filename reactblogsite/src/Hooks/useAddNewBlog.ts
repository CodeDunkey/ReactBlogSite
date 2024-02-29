
import { Blog } from "../Types/Types"
import { clientApi } from "../Utilities/ClientAPI"
export const useAddNewBlog = () => {
    const addNewBlog = async ({ blog, userName }: { blog: Blog, userName: string }) => {
        return clientApi.addNewBlog(blog, userName)
    }
    return { addNewBlog }
}