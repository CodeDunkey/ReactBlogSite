import { useState, useRef, ChangeEvent, KeyboardEvent } from 'react'
import ReactModal from 'react-modal';
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext';
import { useLogInSignUp } from '../../Hooks/Context/useContext/useLogInSignUpContext';
import { useAddNewPost } from '../../Hooks/useAddNewPost';
import { Button, Type } from '../Button/Button';
import { Post } from '../../Types/Types';
import './CreateNewPost.scss'

export const CreateNewPost = ({ blogTitle, userName }: { blogTitle: string, userName: string }) => {

    const [newPost, setNewPost] = useState<boolean>(false);
    const { addNewPost } = useAddNewPost()
    const { setKeyDown } = useLogInSignUp()
    const { setUser } = useUserContext()

    let postTitle = useRef<string>()
    let text = useRef<string>()

    const toggleNewPost = () => {
        setNewPost(!newPost)
    }
    const newPostAdd = async () => {

        let userAddPostToBlog = undefined;

        if (postTitle.current !== undefined && text.current !== undefined) {

            let post: Post = {
                userName: userName,
                blogTitle: blogTitle,
                postTitle: postTitle.current,
                text: text.current,
                dateTimeStamp: new Date().toLocaleString()
            }

            userAddPostToBlog = await addNewPost({ blogTitle: blogTitle, userName: userName, post: post })

            if (userAddPostToBlog !== undefined) {
                
                setUser({ ...userAddPostToBlog })
            }
        }

        text.current = undefined;
        postTitle.current = undefined;

        // activates the modal
        setNewPost(!newPost)
    }

    const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key)
    }
    const textPostTitle = (x: ChangeEvent<HTMLInputElement>) => {
        postTitle.current = x.target.value;
    }
    const textPostText = (x: ChangeEvent<HTMLTextAreaElement>) => {
        text.current = x.target.value;
    }

    return (
        <div>
            <Button text='Create new post' buttonType={Type.POST} onClick={toggleNewPost} />
            <ReactModal isOpen={newPost}>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleNewPost}></Button>
                <h1>create a new  post</h1>
                <label htmlFor="post title" >Post title:</label>
                <input id="post title" onChange={textPostTitle} onKeyDown={keyPress} placeholder='Post title'></input>
                <label htmlFor="post text" >Post title:</label>
                <textarea id="post text" onChange={textPostText} onKeyDown={()=>keyPress} placeholder='Post text'/>
                {/* <input className='postTextArea' id="post text" onChange={textPostText} onKeyDown={keyPress} placeholder='Post text'></input> */}
                {(postTitle.current) && <Button buttonType={Type.SAVE} text="SAVE" onClick={newPostAdd}></Button>}
            </ReactModal>
        </div>
    )
}