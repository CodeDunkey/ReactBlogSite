import { useState } from 'react'
import ReactModal from 'react-modal';
import { Button } from '../Button/Button';
import { Type } from '../Button/Button';
import './CreateNewPost.scss'
export const CreateNewPost = () => {
    const [newPost, setNewPost] = useState<boolean>(false);

    // const { user, setUser } = useUserContext()
    // const { keyDown, setKeyDown } = useLogInSignUp()
    // const { addNewBlog } = useAddNewBlog()
    // let blogTitle = useRef<string>()
    // let postTitle = useRef<string>()
    // let inputEmail = useRef<string>()
    // let inputFirstName = useRef<string>()
    // let inputLastName = useRef<string>()
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
    
    // const newBlogAdd = async () => {

    //     let addBlogToUser;
    //     // console.log("addBlogToUser in newBlog: ", addBlogToUser)
    //     if (blogTitle.current !== undefined && user) {
    //         addBlogToUser = undefined
    //         console.log("addBlogToUser after being undefined: ", addBlogToUser)
    //         let blog: Blog = {
    //             userName: user.userName,
    //             blogTitle: blogTitle.current,
    //             // post?: newPost, 
    //         }
    //         // let newPost: Post = {
    //         //     userName: user.userName,
    //         //     blogTitle: blogTitle.current,
    //         //     postTitle: "",
    //         //     headLine: "",
    //         //     text: "",
    //         //     dateTimeStamp: new Date().toLocaleString(),
    //         // }
    //         addBlogToUser = await addNewBlog({ blog: blog, userName: user.userName })
    //         // console.log("addBlogToUser after being initialised: ", addBlogToUser)

    //         if (addBlogToUser !== undefined){
    //             // console.log("works")
    //             // console.log("user === addBlogToUser in newBlogAdd", user === addBlogToUser )
    //             setUser({...addBlogToUser})
    //         }
    //     }
        
    //     // console.log("addNewBlogAndReturnUser:", addBlogToUser)
        
    //     blogTitle.current = undefined;
    //     postTitle.current = undefined;
        
        
    //     // activates the modal
    //     setNewBlog(!newBlog)
        

    // }
    // // console.log("user in newBlog: ", user)


    // const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    //     setKeyDown(event.key)
    // }
    // const textBlogTitle = (x: ChangeEvent<HTMLInputElement>) => {
    //     blogTitle.current = x.target.value;
    // }

    const toggleNewPost = () => {
        setNewPost(!newPost)
    }
    return (
        <div>
            <Button text='Create new post' buttonType={Type.POST} onClick={toggleNewPost} />
            <ReactModal isOpen={newPost}>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleNewPost}></Button>
                <h1>create a new  post</h1>
                <label htmlFor="post title" >Post title:</label>
                {/* <input id="post title" onChange={textBlogTitle} onKeyDown={keyPress} placeholder='Post title'></input> */}
            </ReactModal>
        </div>
    )
}