
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
        return new Promise<Post[]>((resolve, rejects) => {resolve(Posts)})
    }
    getComments = async () => {
        return new Promise<Comment[]>((resolve, rejects) => {resolve(Comments)})
    }
    addNewBlog = async (blog: Blog, userName: string) => {
        
        const newBlog: Blog = {
            userName: userName,
            blogTitle: blog.blogTitle,
        }
        const findUserAddBlog = Users.find((user) => {

            if (user.userName === userName && user.blog !== undefined) {
                user.blog.push(newBlog)
                
                // const newUserObject = {...user}
                // console.log("user === {...user}", user === newUserObject )
                
                // console.log('user', user);
                // console.log('newUserObject', newUserObject);
                // return newUserObject
                return user
            }

            if (user.userName === userName && user.blog === undefined) {
                user.blog = []
                user.blog.push(newBlog)
                
                return user
            }
        })
        // let userss =  Users.map((user)=>{return console.log("user === findUserAddBlog", user === findUserAddBlog ) })
        
        // console.log("findUserAddBlog in server", findUserAddBlog)
        return new Promise<User | undefined>((resolve, reject) => {
            resolve(findUserAddBlog)
        })
    }

}
export const serverAPI = new ServerAPI(); 