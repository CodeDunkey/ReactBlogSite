import { useState } from "react"
import { User, Blog, Post, Comment } from "../../../Types/Types"
import { Users } from "../Database/Users"

class ServerAPI {
    addUser = (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        let userCount = Users.length;
        console.log("is adding user")
        console.log("userCount",userCount)
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
        console.log("Users",Users)
        
    }
    userVerification = (userName: string, password: string) => {
        console.log("is validating user")
        const userVerified = Users.find((user) => {
            if (userName === user.userName && password === user.password) {
                return user
            }
        })
        return userVerified
    }
    updateUser = (user: User) => {
        const findUser = Users.find((aUser) => {
            if ( user.userName === aUser.userName ) {
                return aUser
            }
        })
        return findUser
    }
    getBlogs = () => {
        
        const userPosts = Users.flatMap((user) => {
            return user.blog || []
        })
        return userPosts
    }
    addNewBlog = ( blog: Blog, userName: string) => {
        const newBlog: Blog = {
            userName: userName,
            blogTitle: blog.blogTitle,
        }
        const findUserAddBlog = Users.find((user) => {
            if(user.userName === userName){
                user.blog?.push(newBlog)
            }
        })

    }
    
}

console.log("Users",Users)
export const serverAPI = new ServerAPI(); 