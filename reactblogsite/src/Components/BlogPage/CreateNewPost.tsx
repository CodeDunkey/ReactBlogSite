import { useState, useRef, ChangeEvent, KeyboardEvent, TextareaHTMLAttributes, EventHandler, ChangeEventHandler } from 'react'
import ReactModal from 'react-modal';
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext';
import { useLogInSignUp } from '../../Hooks/Context/useContext/useLogInSignUpContext';
import { useAddNewPost } from '../../Hooks/useAddNewPost';
import { Button } from '../Button/Button';
import { Type } from '../Button/Button';
import { Post } from '../../Types/Types';
import './CreateNewPost.scss'

export const CreateNewPost = ({ blogTitle, userName }: { blogTitle: string, userName: string }) => {

    const [newPost, setNewPost] = useState<boolean>(false);
    const { addNewPost } = useAddNewPost()
    const { keyDown, setKeyDown } = useLogInSignUp()
    const { user, setUser } = useUserContext()

    let postTitle = useRef<string>()
    let text = useRef<string>()

    // const toggleNewBlog = () => {
    //     if (!user) {
    //         alert("You must be logged in to create a blog");
    //         // setNewBlog(false)
    //     }
    //     if (user) {
    //         setNewBlog(!newBlog)
    //         blogTitle.current = undefined;
    //         postTitle.current = undefined;
    //     }
    // }
    const toggleNewPost = () => {
        setNewPost(!newPost)
    }
    const newPostAdd = async () => {

        let addPostToBlog = undefined;

        if (postTitle.current !== undefined && text.current !== undefined) {

            let post: Post = {
                userName: userName,
                blogTitle: blogTitle,
                postTitle: postTitle.current,
                text: text.current,
                dateTimeStamp: new Date().toLocaleString()
            }

            addPostToBlog = await addNewPost({ blogTitle: blogTitle, userName: userName, post: post })

            if (addPostToBlog !== undefined) {
                // console.log("works")
                // console.log("user === addBlogToUser in newBlogAdd", user === addBlogToUser )
                setUser({ ...addPostToBlog })
            }
        }
        // let newPost: Post = {
        //     userName: user.userName,
        //     blogTitle: blogTitle.current,
        //     postTitle: "",

        //     text: "",
        //     dateTimeStamp: new Date().toLocaleString(),
        // }
        // console.log("addBlogToUser after being initialised: ", addBlogToUser)



        // console.log("addNewBlogAndReturnUser:", addBlogToUser)

        text.current = undefined;
        postTitle.current = undefined;


        // activates the modal
        setNewPost(!newPost)


    }
    // // console.log("user in newBlog: ", user)


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