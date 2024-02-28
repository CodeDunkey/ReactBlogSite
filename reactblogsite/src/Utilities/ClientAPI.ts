import { serverAPI } from "../Components/Server/Utilities/ServerApi";
import { Blog, User } from "../Types/Types";
class ClientAPI {

    addUser = (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        return serverAPI.addUser(userName, password, email, firstName, lastName)
    }
    validateUserAndPassword = ( userName: string, password: string ) => {
        return serverAPI.userVerification( userName, password );
    }
    getBlogs = () => {
        return serverAPI.getBlogs();
    }
    addNewBlog = (blog: Blog, userName: string) => {
        serverAPI.addNewBlog(blog, userName)
    }
    // updateUser = (user: User) => {
    //     return serverAPI.updateUser(user)
    // }
}

export const clientApi = new ClientAPI();