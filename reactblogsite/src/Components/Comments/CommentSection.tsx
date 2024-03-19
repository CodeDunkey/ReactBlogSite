import './CommentSection.scss'
import { useComments } from "../../Hooks/useComments";
import { CreateNewComments } from "../CreateNewComments/CreateNewComments";
import { useUserContext } from "../../Hooks/Context/useContext/useUserContext";
import { CommentToComment } from "../CreateNewComments/CommentToComment/CommentToComment";
import { Blog, Post } from '../../Types/Types';
export const CommentSection = ({ post, blog }: { post: Post, blog: Blog }) => {
    const { user } = useUserContext();
    const { comments } = useComments();
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
        if (comment.userName === blog.userName && comment.postTitle === post.postTitle && comment.blogIdNumber === blog.blogIdNumber) {
            const showCommentToComment = comment.commentToComment?.map((element) => {
                return (
                    <div className='comment'>
                        <div>User: {element.fromUser}</div>
                        <div>{element.dateTimeStamp}</div>
                        <br></br>
                        <div>{element.comment}</div>
                    </div>
                )
            })
            return (
                <div className='comment'>
                    <div>User: {comment.fromUser}</div>
                    <div>{comment.dateTimeStamp}</div>
                    <br></br>
                    <div>{comment.comment}</div>
                    <div className='commentToComment'>{showCommentToComment}</div>
                    <div className='commentButtonPlacement'><CommentToComment blog={blog} post={post} comment={comment} /></div>
                </div>
            )
        }
    })
    return (<div className="commentWrapper">{postComments}</div>)
}


// {user && <CreateNewComments postTitle={postTitle} blogTitle={blogTitle} blogUserName={blogUserName} />}