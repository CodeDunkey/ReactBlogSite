import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { useUserContext } from "./Context/useContext/useUserContext";
import { usePostContext } from "./Context/useContext/usePostContext";
import { useCommentContext } from "./Context/useContext/useCommentContext";
export const usePosts = () => {
    const { posts, setPosts } = usePostContext();
    const { comments, setComments } = useCommentContext();
    const { user } = useUserContext();
    
    useEffect(()=>{
        const getPosts = async () => {
            const userPosts = await clientApi.getPosts();
            setPosts(userPosts)
        }
        getPosts();
    },[user, comments])
    return {
        posts,
    }
}