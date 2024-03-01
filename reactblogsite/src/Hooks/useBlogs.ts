import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { Blog, Post } from "../Types/Types";
import { useBlogContext } from "./useBlogContext";
import { useUserContext } from "./useUserContext";
export const useBlogs = () => {
    const { blogs, setBlogs} = useBlogContext();
    const { user } = useUserContext();
    // console.log("user in useBlogs", user)
    useEffect(()=>{
        const getBlogs = async () => {
            const userBlogs = await clientApi.getBlogs();
            setBlogs(userBlogs)
        }
        getBlogs();
    },[user]) // 
    return {
        blogs,
    }
}

// skal flyttes ud i en context