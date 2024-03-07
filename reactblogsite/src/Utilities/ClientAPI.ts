import { serverAPI } from "../Components/Server/Utilities/ServerApi";
import { Blog, User, Post } from "../Types/Types";
class ClientAPI {

    addUser = async (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        return await serverAPI.addUser(userName, password, email, firstName, lastName)
    }
    validateUserAndPassword = async ( userName: string, password: string ) => {
        return await serverAPI.userVerification( userName, password );
    }
    getBlogs = async () => {
        return await serverAPI.getBlogs();
    }
    getPosts = async () => {
        return await serverAPI.getPosts();
    }
    getComments = async () => {
        return await serverAPI.getComments();
    }
    addNewBlog = async (blog: Blog, userName: string) => {
         return await serverAPI.addNewBlog(blog, userName)
    }
    addNewPost = async (blogTitle: string, userName: string, post: Post) => {
         return await serverAPI.addNewPost(blogTitle, userName, post)
    }
}

export const clientApi = new ClientAPI();