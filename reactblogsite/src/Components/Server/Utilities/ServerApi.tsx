import { useState } from "react"
import { User, Post, Comment } from "../../../Types/Types"
import { Users } from "../Database/Users"

class ServerAPI {
    userVerification = (userName: string, password: string) => {

        const userVerified = Users.find((user) => {
            if (userName === user.userName && password === user.password) {
                return user
            }
        })
        return userVerified
    }

    getPosts = () => {
        
        const userPosts = Users.map((users) => {
            // const userPost = users.post?.map((post)=> {
            //     return post.headLine
            // })
            // return userPost
            return users.post
        })
        return userPosts
    }
}

export const serverAPI = new ServerAPI(); 