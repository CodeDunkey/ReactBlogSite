import ReactModal from "react-modal"
import { Button, Type } from "../../Button/Button"
import { useAddCommentToComment } from "../../../Hooks/useAddCommentToComment"
import { useUserContext } from "../../../Hooks/Context/useContext/useUserContext";
import { useRef, KeyboardEvent, ChangeEvent, useState } from "react";
import { Blog, Comment, Post } from "../../../Types/Types";
import { useLogInSignUp } from "../../../Hooks/Context/useContext/useLogInSignUpContext";
export const CommentToComment = ({ blog, post, comment }: { blog: Blog, post: Post, comment: Comment }) => {

    const [ newComment, setNewComment ] = useState<boolean>(false)
    const { user, setUser } = useUserContext();
    const { addCommentToComment } = useAddCommentToComment();
    const { setKeyDown } = useLogInSignUp()
    let commentText = useRef<string>()
    const toggleNewPost = () => {
        setNewComment(!newComment)
    }
    const newCommentToComment = async () => {
        let addNewCommentToComment = undefined;

        if (commentText.current !== undefined && user?.userName !== undefined) {

            let commentToComment: Comment = {
                userName: blog.userName,
                blogTitle: blog.blogTitle,
                blogIdNumber: blog.blogIdNumber,
                postTitle: post.postTitle,
                postIdNumber: post.postIdNumber,
                fromUser: user.userName,
                comment: commentText.current,
                commentIdNumber: Math.random(),
                dateTimeStamp: new Date().toLocaleString(),
            }
            addNewCommentToComment = await addCommentToComment({ blog: blog, post: post, comment: comment, commentToComment: commentToComment });
            
            if (addNewCommentToComment !== undefined){
                setUser({ ...addNewCommentToComment })
            }
        }

        commentText.current = undefined;
        setNewComment(!newComment)
    }
    const keyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        setKeyDown(event.key)
    }
    
    const textCommentText = (x: ChangeEvent<HTMLTextAreaElement>) => {
        commentText.current = x.target.value;
    }
    return (
        <div>
            {user && <Button text='Make new comment' buttonType={Type.COMMENT} onClick={toggleNewPost} />}
            <ReactModal isOpen={newComment}>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleNewPost}></Button>
                <h1>create a new comment</h1>
                <label htmlFor="comment text" >comment title:</label>
                <textarea id="comment title" onChange={textCommentText} onKeyDown={keyPress} placeholder='comment title'></textarea>
                
                <Button buttonType={Type.SAVE} text="SAVE" onClick={newCommentToComment}></Button>
            </ReactModal>

        </div>
    )
}
