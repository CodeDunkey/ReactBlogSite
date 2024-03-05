import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { useBlogContext } from "./Context/useContext/useBlogContext";
import { useUserContext } from "./Context/useContext/useUserContext";
export const useBlogs = () => {
    const { blogs, setBlogs} = useBlogContext();
    const { user } = useUserContext();
    
    useEffect(()=>{
        const getBlogs = async () => {
            const userBlogs = await clientApi.getBlogs();
            setBlogs(userBlogs)
        }
        getBlogs();
    },[user])
    return {
        blogs,
    }
}