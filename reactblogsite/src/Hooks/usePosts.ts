import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { useUserContext } from "./Context/useContext/useUserContext";
import { usePostContext } from "./Context/useContext/usePostContext";
export const usePosts = () => {
    const { posts, setPosts } = usePostContext();
    const { user } = useUserContext();
    
    useEffect(()=>{
        const getPosts = async () => {
            const userPosts = await clientApi.getPosts();
            setPosts(userPosts)
        }
        getPosts();
    },[user])
    return {
        posts,
    }
}