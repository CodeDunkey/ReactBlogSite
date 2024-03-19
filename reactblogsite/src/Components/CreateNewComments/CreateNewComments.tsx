import { useState, useRef, ChangeEvent, KeyboardEvent } from 'react'
import './CreateNewComments.scss'
import ReactModal from 'react-modal'
import { Button, Type } from '../Button/Button'
import { useLogInSignUp } from '../../Hooks/Context/useContext/useLogInSignUpContext'
import { Blog, Comment, Post } from '../../Types/Types'
import { useAddNewComment } from '../../Hooks/useAddNewComment'
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext'
import { useCommentContext } from '../../Hooks/Context/useContext/useCommentContext'

export const CreateNewComments = ({ post, blog }: { post: Post, blog: Blog }) => {
    
    const [newComment, setNewComment] = useState<boolean>(false); 
    const { setKeyDown } = useLogInSignUp()
    const { user, setUser } = useUserContext()
    const { addNewComment } = useAddNewComment()
    const { comments, setComments } = useCommentContext()
     
    let commentText = useRef<string>()

    const toggleNewPost = () => {
        setNewComment(!newComment)
    }
    
    const newCommentAdd = async () => {

        let addCommentToPost = undefined;

        if (commentText.current !== undefined && user?.userName !== undefined) {

            let comment: Comment = {
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

            addCommentToPost = await addNewComment({ comment: comment })

            if (addCommentToPost !== undefined) {
                
                setUser({ ...addCommentToPost })
            }
        }

        commentText.current = undefined;

        // activates the modal
        
        setNewComment(!newComment)
    }

    const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key)
    }
   
    // const textCommentText = (x: ChangeEvent<HTMLTextAreaElement>) => {
    //     commentText.current = x.target.value;
    // }

    const textCommentText = (x: ChangeEvent<HTMLInputElement>) => {
        commentText.current = x.target.value;
    }
    return (
        <div>
            <Button text='Make new comment' buttonType={Type.COMMENT} onClick={toggleNewPost} />
            <ReactModal isOpen={newComment}>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleNewPost}></Button>
                <h1>create a new comment</h1>
                <label htmlFor="comment text" >comment title:</label>
                <input id="comment title" onChange={textCommentText} onKeyDown={keyPress} placeholder='comment title'></input>
                {/* <textarea id="post text" onChange={textCommentText} onKeyDown={()=>keyPress} placeholder='comment text'/> */}
                <Button buttonType={Type.SAVE} text="SAVE" onClick={newCommentAdd}></Button>
            </ReactModal>
        </div>
    )
}