import { useViewBloggersContent } from "../../Hooks/useViewBloggersContent";
import { Post } from "../../Types/Types";
import './ShowContentFromUsers.scss'
export const PostCarousel = () => {
    const { posts } = useViewBloggersContent();

    const postCarousel = posts.map((post) => {
        return (
            <div className="postCarouselWrapper">
                <h1 className="postCarousel">{post.headLine}</h1>

            </div>
        )
    })
    return (
        { postCarousel }
    )
}