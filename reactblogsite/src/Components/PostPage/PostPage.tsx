import './PostPage.scss'
import { Comment } from '../../Types/Types'
import { usePosts } from '../../Hooks/usePosts'
import { useComments } from '../../Hooks/useComments'
import { useUserContext } from '../../Hooks/Context/useContext/useUserContext'
import { CreateNewComments } from '../CreateNewComments/CreateNewComments'
import { useState } from 'react'
export const PostPage = ({ postTitle, blogTitle, blogUserName }: { postTitle: string, blogTitle: string, blogUserName: string }) => {
    
    const { posts } = usePosts();
    const { comments } = useComments();
    const { user } = useUserContext();
    
    console.log('comments', comments);

    let commentsCopy = [...comments]
    console.log('commentsCopy', commentsCopy);
    
    const sortingTheArrayByDateStamp = (a: any, b: any) => {

        let timeStampA = new Date(a.dateTimeStamp)
        let timeStampB = new Date(b.dateTimeStamp)

        return timeStampA.valueOf() - timeStampB.valueOf()
    }

    if (commentsCopy !== undefined) {
        commentsCopy.sort(sortingTheArrayByDateStamp);
    }
    
    let postComments = commentsCopy.map((comment) => {
        console.log('comment in postComments', comment);
        if (comment.userName === blogUserName && comment.postTitle === postTitle && comment.blogTitle === blogTitle) {

            return (
                <div className='comment'>
                    <div>User: {comment.fromUser}</div>
                    <div>{comment.dateTimeStamp}</div>
                    <br></br>
                    <div>{comment.comment}</div>
                </div>
            )
        }
    })
    
    const post = posts.map((post) => {
        if (blogUserName === post.userName && post.blogTitle === blogTitle && post.postTitle === postTitle) {
            return (
                <div>
                    <h1>Blog: {blogTitle} By: {blogUserName}</h1>
                    <h1>Post: {post.postTitle}</h1>
                    <h2>Post Text: <br></br>{post.text}</h2>
                    {user && <CreateNewComments postTitle={postTitle} blogTitle={blogTitle} blogUserName={blogUserName} />}
                    {postComments && <div className='commentWrapper'><h6>Comments</h6> {postComments}</div>}
                </div>
            )
        }
    })


    return (
        <div className='postPageWrapper'>
            {post}
        </div>
    )
}