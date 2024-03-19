
import { Blog } from "../Types/Types"
import { clientApi } from "../Utilities/ClientAPI"
export const useAddNewBlog = () => {
    const addNewBlog = async ({ blog }: { blog: Blog }) => {
        return await clientApi.addNewBlog(blog)
    }
    return { addNewBlog }
}