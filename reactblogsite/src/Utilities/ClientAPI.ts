import { serverAPI } from "../Components/Server/Utilities/ServerApi";
import { Blog, Comment, Post, User } from "../Types/Types";
class ClientAPI {

    addUser = async (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        return await serverAPI.addUser(userName, password, email, firstName, lastName)
    }
    validateUserAndPassword = async ( userName: string, password: string ) => {
        return await serverAPI.userVerification( userName, password );
    }
    editUserInfo = async (user: User, userInfoEdited: User) => {
        return await serverAPI.editUserInfo(user, userInfoEdited);
    }
    deleteUser = async (user: User) => {
        return await serverAPI.deleteUser(user);
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
    addNewBlog = async (blog: Blog) => {
         return await serverAPI.addNewBlog(blog)
    }
    editBlog = async (blog: Blog) => {
        return await serverAPI.editBlog(blog)
    }
    addNewPost = async (blog: Blog, post: Post) => {
         return await serverAPI.addNewPost(blog, post)
    }
    addNewComment = async ( comment: Comment) => {
         return await serverAPI.addNewComment( comment)
    }
    addCommentToComment = async (blog: Blog, post: Post, comment: Comment, commentToComment: Comment) => {
        return await serverAPI.addCommentToComment(blog, post, comment, commentToComment)
    }

}

export const clientApi = new ClientAPI();