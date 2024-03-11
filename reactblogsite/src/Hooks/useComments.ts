import { useEffect } from "react";
import { clientApi } from "../Utilities/ClientAPI";
import { useUserContext } from "./Context/useContext/useUserContext";
import { useCommentContext } from "./Context/useContext/useCommentContext";
export const useComments = () => {
    const { user } = useUserContext();
    const {comments, setComments} = useCommentContext()
    
    useEffect(()=> { 
        const getComments = async () => {
            const postComments = await clientApi.getComments();
            setComments(postComments)
        }
        getComments();
    }, [user])
    
    return { 
        comments,
    }
} 