import { serverAPI } from "../Components/Server/Utilities/ServerApi";
import { Blog, User } from "../Types/Types";
class ClientAPI {

    addUser = async (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        return serverAPI.addUser(userName, password, email, firstName, lastName)
    }
    validateUserAndPassword = async ( userName: string, password: string ) => {
        return serverAPI.userVerification( userName, password );
    }
    getBlogs = async () => {
        return serverAPI.getBlogs();
    }
    addNewBlog = async (blog: Blog, userName: string) => {
         return serverAPI.addNewBlog(blog, userName)
    }
}

export const clientApi = new ClientAPI();