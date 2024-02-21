import { useViewBloggersContent } from "../../../Hooks/useViewBloggersContent";
import { Post } from "../../../Types/Types";
export const ShowContentFromUsers = () => {
    const { posts } = useViewBloggersContent();
    // const postCarousel = posts.map((post: any) => post.headLine)
    console.log();
    console.log("posts in ShowContentFromUsers: ", posts)
    // console.log("postCarousel: ", postCarousel)

    return (
        <div>{}</div> // postCarousel
    )
}