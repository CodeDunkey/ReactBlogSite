import { useEffect, useState } from "react"
import { clientApi } from "../Utilities/ClientAPI";
import { useCommentContext } from "./Context/useContext/useCommentContext";
import { useUserContext } from "./Context/useContext/useUserContext";
export const useComments = () => {
    const { comments, setComments } = useCommentContext();
    const { user } = useUserContext();
    
    useEffect(()=>{
        const getComments = async () => {
            const userComments = await clientApi.getComments();
            setComments(userComments)
        }
        getComments();
    },[user])
    return {
        comments,
    }
}