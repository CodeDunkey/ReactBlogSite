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

    addNewBlog = async (blog: Blog, userName: string) => {
         return await serverAPI.addNewBlog(blog, userName)
    }
    addNewPost = async (blogTitle: string, blogIdNumber: number, userName: string, post: Post) => {
         return await serverAPI.addNewPost(blogTitle, blogIdNumber, userName, post)
    }
    addNewComment = async (blogTitle: string, postTitle: string, userName: string, comment: Comment) => {
         return await serverAPI.addNewComment(blogTitle, postTitle, userName, comment)
    }
    addCommentToComment = async (blogTitle: string, postTitle: string, blogUserName: string, comment: Comment, commentToComment: Comment) => {
        return await serverAPI.addCommentToComment(blogTitle, postTitle, blogUserName, comment, commentToComment)
    }
}

export const clientApi = new ClientAPI();