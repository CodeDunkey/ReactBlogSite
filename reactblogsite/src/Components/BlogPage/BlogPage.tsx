import './BlogPage.scss'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext'
import { useEditBlogInfo } from '../../Hooks/useEditBlogInfo'
import { usePosts } from '../../Hooks/usePosts'
import { Blog } from '../../Types/Types'
import { CreateNewPost } from './CreateNewPost'
import { Button, Type } from '../Button/Button'
import ReactModal from 'react-modal'
import { useState, KeyboardEvent, ChangeEvent } from 'react'
import { useLogInSignUp } from '../../Hooks/Context/useContext/useLogInSignUpContext'
export const BlogPage = ({blog}: {blog: Blog}) => {
    // { blogTitle, blogIdNumber, blogUserName }: { blogTitle: string, blogIdNumber: number, blogUserName: string }
    const [editBlog, setEditBlog] = useState<boolean>(false);
    const { editBlogInfo } = useEditBlogInfo();
    const { user, setUser } = useUserContext();
    const { posts } = usePosts();
    const { setKeyDown } = useLogInSignUp()
    
    const [editBlogInfomation, setEditBlogInfo] = useState<Blog | undefined>(undefined)
    // let editUserInfo = useRef<User>()
    // user !== undefined && 
    if (editBlogInfomation === undefined) {
        setEditBlogInfo({
            blogIdNumber: blog.blogIdNumber,
            blogTitle: blog.blogTitle,
            userName: blog.userName
        })
    }

    const blogPosts = posts.map((post) => {
        if (post.blogIdNumber === blog.blogIdNumber) {
            return (
                <Link to={`/Blog/(${blog.blogIdNumber.toString()})/Post/(${post.postIdNumber.toString()})`} className="blogLinkStyle">
                    <div className='blogPost'>
                        {post.postTitle}
                    </div>
                </Link>
            )
        }
    })

    const toggleEditBlog = () => {
        setEditBlog(!editBlog)
    }

    const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key)
    }
    const textBlogTitle = (x: ChangeEvent<HTMLInputElement>) => {
        if(editBlogInfomation !== undefined){

            setEditBlogInfo({...editBlogInfomation, blogTitle: x.target.value})
        }
        
        if(editBlogInfomation?.blogTitle === ""){
                setEditBlogInfo({...editBlogInfomation, blogTitle: blog.blogTitle})
            }
        // blogTitle.current = ;
    }
    console.log('editBlogInfomation?.blogTitle', editBlogInfomation?.blogTitle);
    const saveEditBlog = async () => {
        let blogInformationEdited = undefined;
        if (editBlogInfomation !== undefined){
            blogInformationEdited = await editBlogInfo({blog: editBlogInfomation})
            if (blogInformationEdited !== undefined){
                
                setUser({...blogInformationEdited})
            }
        }
        setEditBlog(!editBlog)
    }
    return (
        <div className='blogPageWrapper'>
            <div className='BlogHeaderWrapper'>
                <div className='blogheaderItem'><div></div></div>
                <div className='blogheaderItem'><h1>Blog: {blog.blogTitle} By: {blog.userName}</h1></div>
                {user?.userName === blog.userName && <Button buttonType={Type.EDIT} text='Edit Blog' onClick={toggleEditBlog}/>}
                <div className='blogheaderItem'>{user?.userName === blog.userName && <CreateNewPost blog={blog}/>}</div>
            </div>
            <div className='BlogPostsWrapper'>{blogPosts}</div>
            <ReactModal isOpen={editBlog}>
            <h1>Edit blog</h1>
                <Button buttonType={Type.EXIT} text="X" onClick={toggleEditBlog}></Button>
                <label htmlFor="blog title" >Blog title:</label>
                <input id="blog title" value={editBlogInfomation?.blogTitle} onChange={textBlogTitle} onKeyDown={keyPress} placeholder='Blog title'></input>
                {blog.blogTitle !== editBlogInfomation?.blogTitle && <Button buttonType={Type.SAVE} text="SAVE" onClick={saveEditBlog}></Button>}

            </ReactModal>
        </div>
    )
}