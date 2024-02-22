import { useState } from "react"
import { User, Post, Comment } from "../../../Types/Types"
import { Users } from "../Database/Users"

class ServerAPI {
    addUser = (userName: string, password: string, email: string, firstName: string, lastName: string) => {
        console.log("is adding user")
        const newUser: User = {
            userId: Math.random(),
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

    getPosts = () => {

        const userPosts = Users.flatMap((user) => {
            return user.post || []
        })
        return userPosts
    }
    // getPosts = () => {

    //     const usersWithPosts = Users.filter((user) =>            
    //         user.post !== undefined
    //     )
    //     const userPosts = usersWithPosts.map((user)=> {
    //         return user.post
    //     })
    //     return userPosts || []
    // }
}

console.log("Users",Users)
export const serverAPI = new ServerAPI(); 