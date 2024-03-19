import { User, Blog, Post, Comment } from "../../../Types/Types"
import { resolve } from "path";
import { rejects } from "assert";
import { database } from "../Database/Database";


console.log('database', database);
class ServerAPI {
    addUser = async (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        let userCount = database.users.length;
        const newUser: User = {
            userId: userCount + 1,
            userName: userName,
            createdDateTime: new Date().toLocaleString(),
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName,
        }
        database.users.push(newUser)
        return new Promise<User | undefined>((resolve) => { resolve(newUser) })
    }
    editUserInfo = async (user: User, userInfoEdited: User) => {
        let indexOfUser = database.users.indexOf(user)
        database.users.splice(indexOfUser, 1)
        const editedUser: User = {
            userId: user.userId,
            userName: userInfoEdited.userName,
            firstName: userInfoEdited.firstName,
            lastName: userInfoEdited.lastName,
            email: userInfoEdited.email,
            password: userInfoEdited.password,
            createdDateTime: user.createdDateTime,
        }
        database.users.push(editedUser)
        return new Promise<User | undefined>((resolve) => { resolve(editedUser) })
    }
    deleteUser = async (user: User) => {

        let filteretCommentToComment = database.comments.map((element) => {
            let filtering =  element.commentToComment?.filter((comment)=> comment.fromUser !== user.userName && comment.userName !== user.userName)
            element.commentToComment = filtering
        })
        let filteretCommentList = database.comments.filter((comment) => comment.fromUser !== user.userName && comment.userName !== user.userName)
        database.comments = filteretCommentList
        let filteretPostsList = database.posts.filter((post) => post.userName !== user.userName)
        database.posts = filteretPostsList;
        let filteretBlogsList = database.blogs.filter((blog) => blog.userName !== user.userName)
        database.blogs = filteretBlogsList
        let filteretUsersList = database.users.filter((users) => users.userName !== user.userName)
        database.users = filteretUsersList

        return new Promise<undefined>((resolve) => { resolve(undefined) })
    }
    userVerification = async (userName: string, password: string) => {
        const userVerified = database.users.find((user: User) => {
            if (userName === user.userName && password === user.password) {
                return user
            }
        })
        return new Promise<User | undefined>((resolve, reject) => { resolve(userVerified) })
    }
    getBlogs = async () => {
        return new Promise<Blog[]>((resolve, reject) => { resolve(database.blogs) })
    }
    getPosts = async () => {
        return new Promise<Post[]>((resolve, rejects) => { resolve(database.posts) })
    }
    getComments = async () => {
        return new Promise<Comment[]>((resolve, rejects) => { resolve(database.comments) })
    }
    addNewBlog = async (blog: Blog) => {
        const findUser = database.users.find((user: User) => {
            if (blog.userName === user.userName) {
                return user
            }
        })
        const newBlog: Blog = {
            userName: blog.userName,
            blogTitle: blog.blogTitle,
            blogIdNumber: Math.random(),
        }
        database.blogs.push(newBlog)

        return new Promise<User | undefined>((resolve, reject) => { resolve(findUser) })
    }
    editBlog = async (blog: Blog) => {
        const findUser = database.users.find((user: User) => {
            if (blog.userName === user.userName) {
                return user
            }
        })

        let filteretBlogsList = database.blogs.filter((element) => element.blogIdNumber !== blog.blogIdNumber );
        database.blogs = filteretBlogsList;

        const editedBlog: Blog = {
            userName: blog.userName,
            blogIdNumber: blog.blogIdNumber,
            blogTitle: blog.blogTitle,
        }
        database.blogs.push(editedBlog)

        return new Promise<User | undefined>((resolve, reject) => { resolve(findUser) })
    }
    addNewPost = async (blog: Blog, post: Post) => {
        const findUser = database.users.find((user: User) => {
            if (blog.userName === user.userName) {
                return user
            }
        })
        const newPost: Post = {
            userName: blog.userName,
            blogTitle: blog.blogTitle,
            blogIdNumber: blog.blogIdNumber,
            postTitle: post.postTitle,
            postIdNumber: post.postIdNumber,
            text: post.text,
            dateTimeStamp: post.dateTimeStamp,
        }
        database.posts.push(newPost)

        return new Promise<User | undefined>((resolve, reject) => {
            resolve(findUser)
        })
    }
    addNewComment = async (comment: Comment) => {

        const findUser = database.users.find((user: User) => {
            if (comment.fromUser === user.userName) {
                return user
            }
        })
        // console.log('comment in serverApi', comment);
        const newComment: Comment = {
            userName: comment.userName,
            blogTitle: comment.blogTitle,
            blogIdNumber: comment.blogIdNumber,
            postTitle: comment.postTitle,
            postIdNumber: comment.postIdNumber,
            fromUser: comment.fromUser,
            comment: comment.comment,
            commentIdNumber: comment.commentIdNumber,
            dateTimeStamp: comment.dateTimeStamp,
        }
        database.comments.push(newComment)

        return new Promise<User | undefined>((resolve, reject) => {
            resolve(findUser)
        })
    }
    addCommentToComment = async (blog: Blog, post: Post, comment: Comment, commmentToComment: Comment) => {
        const findUser = database.users.find((user: User) => {
            if (commmentToComment.fromUser === user.userName) {
                return user
            }
        })
        const newCommentToComment: Comment = {
            userName: blog.userName,
            blogTitle: blog.blogTitle,
            blogIdNumber: blog.blogIdNumber,
            postTitle: post.postTitle,
            postIdNumber: post.postIdNumber,
            fromUser: commmentToComment.fromUser,
            comment: commmentToComment.comment,
            commentIdNumber: commmentToComment.commentIdNumber,
            dateTimeStamp: commmentToComment.dateTimeStamp,
        }
        const findComment = database.comments.find((element) => {
            if (element === comment) {
                if (element.commentToComment === undefined) {
                    element.commentToComment = [];
                }
                if (element.commentToComment !== undefined) {

                    element.commentToComment.push(newCommentToComment)
                }
            }
        })

        return new Promise<User | undefined>((resolve, reject) => {
            resolve(findUser)
        })
    }

}
export const serverAPI = new ServerAPI(); 
