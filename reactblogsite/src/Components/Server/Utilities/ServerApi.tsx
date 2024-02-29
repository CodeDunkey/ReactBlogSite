import { useState } from "react"
import { User, Blog, Post, Comment } from "../../../Types/Types"
import { Users } from "../Database/Users"
import { resolve } from "path";

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
        const userBlogs = Users.flatMap((user) => {
            return user.blog || []
        })

        return new Promise<Blog[]>((resolve, reject) => { resolve(userBlogs) })
    }
    addNewBlog = async (blog: Blog, userName: string) => {
        
        const newBlog: Blog = {
            userName: userName,
            blogTitle: blog.blogTitle,
        }
        const findUserAddBlog = Users.find((user) => {

            if (user.userName === userName) {
                user.blog?.push(newBlog)
                const userObject = {...user}
                // userObject.user = user;
                // console.log(userObject === user, userObject, user)
                return userObject
            }

        })
        console.log("findUserAddBlog", findUserAddBlog)
        return new Promise<User | undefined>((resolve, reject) => {
            resolve(findUserAddBlog)
        })
    }

}
export const serverAPI = new ServerAPI(); 