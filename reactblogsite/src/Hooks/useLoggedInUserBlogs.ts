import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { Blog, Post } from "../Types/Types";
import { useBlogContext } from "./useBlogContext";
import { useUserContext } from "./useUserContext";
export const useLoggedInUserBlogs = () => {
    const { user, setUser } = useUserContext()
    const { blogs, setBlogs} = useBlogContext();
    console.log("user in useLoggedInUserBlogs", user)

    // const newBlogs = clientApi
    useEffect(()=>{
        const getBlogs = async () => {
            const userBlogs = await clientApi.getBlogs();
            setBlogs(userBlogs)
        }
        getBlogs();
    },[blogs]) // 
    return {
        blogs
    }
}