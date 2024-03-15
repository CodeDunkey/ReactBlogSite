
import { User, Blog, Post, Comment } from "../../../Types/Types"
import { Users } from "../Database/Users"
import { Blogs } from "../Database/Blogs";
import { resolve } from "path";
import { rejects } from "assert";
import { Posts } from "../Database/Posts";
import { Comments } from "../Database/Comments";

class ServerAPI {
    addUser = async (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        let userCount = Users.length;
        const newUser: User = {
            userId: userCount + 1,
            userName: userName,
            createdDateTime: new Date().toLocaleString(),
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName,
        }
        Users.push(newUser)
        return new Promise<User | undefined>((resolve) => { resolve(newUser) })
    }
    editUserInfo = async (user: User, userInfoEdited: User) => {
        let filterUsers = Users.filter((element) => 
            element.userId === user.userId
        )
        console.log('Users after filter', Users);
        console.log('filterUsers', filterUsers);
        const editedUser: User = {
            userId: user.userId,
            userName: userInfoEdited.userName,
            firstName: userInfoEdited.firstName,
            lastName: userInfoEdited.lastName,
            email: userInfoEdited.email,
            password: userInfoEdited.password,
            createdDateTime: user.createdDateTime,
        }
        console.log('editedUser', editedUser);
        Users.push(editedUser)
        console.log('Users ', Users);
        // console.log('mapUser', mapUser);
        // let  = Users.find((element) => {
        //     if (element.userName === userInfoEdited.userName) {

        //         return element
        //     }
        // })
        // if (findUser) {

        // }
        // console.log('findUser', findUser);

        return new Promise<User | undefined>((resolve) => { resolve(editedUser) })
    }
    userVerification = async (userName: string, password: string) => {
        const userVerified = Users.find((user) => {
            if (userName === user.userName && password === user.password) {
                return user
            }
        })
        return new Promise<User | undefined>((resolve, reject) => { resolve(userVerified) })
    }

    getBlogs = async () => {
        // const userBlogs = Users.flatMap((user) => {
        //     return user.blog || []
        // })

        return new Promise<Blog[]>((resolve, reject) => { resolve(Blogs) })
    }
    getPosts = async () => {
        return new Promise<Post[]>((resolve, rejects) => { resolve(Posts) })
    }
    getComments = async () => {
        return new Promise<Comment[]>((resolve, rejects) => { resolve(Comments) })
    }
    addNewBlog = async (blog: Blog, userName: string) => {
        const findUser = Users.find((user) => {
            if (userName === user.userName) {
                return user
            }
        })
        const newBlog: Blog = {
            userName: userName,
            blogTitle: blog.blogTitle,
        }
        Blogs.push(newBlog)

        return new Promise<User | undefined>((resolve, reject) => {
            resolve(findUser)
        })
    }
    addNewPost = async (blogTitle: string, userName: string, post: Post) => {
        const findUser = Users.find((user) => {
            if (userName === user.userName) {
                return user
            }
        })
        const newPost: Post = {
            userName: userName,
            blogTitle: blogTitle,
            postTitle: post.postTitle,
            text: post.text,
            dateTimeStamp: post.dateTimeStamp,
        }
        Posts.push(newPost)

        return new Promise<User | undefined>((resolve, reject) => {
            resolve(findUser)
        })
    }
    addNewComment = async (blogTitle: string, postTitle: string, userName: string, comment: Comment) => {

        const findUser = Users.find((user) => {
            if (comment.fromUser === user.userName) {
                return user
            }
        })
        // console.log('comment in serverApi', comment);
        const newComment: Comment = {
            userName: userName,
            blogTitle: blogTitle,
            postTitle: postTitle,
            fromUser: comment.fromUser,
            comment: comment.comment,
            dateTimeStamp: comment.dateTimeStamp,
        }
        Comments.push(newComment)

        return new Promise<User | undefined>((resolve, reject) => {
            resolve(findUser)
        })
    }
    addCommentToComment = async (blogTitle: string, postTitle: string, userName: string, comment: Comment, commmentToComment: Comment) => {
        const findUser = Users.find((user) => {
            if (commmentToComment.fromUser === user.userName) {
                return user
            }
        })
        const newCommentToComment: Comment = {
            userName: userName,
            blogTitle: blogTitle,
            postTitle: postTitle,
            fromUser: commmentToComment.fromUser,
            comment: commmentToComment.comment,
            dateTimeStamp: commmentToComment.dateTimeStamp,
        }
        const findComment = Comments.find((element) => {
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
