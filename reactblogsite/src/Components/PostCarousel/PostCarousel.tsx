import { useEffect, useState } from "react";
import { useBlogs } from "../../Hooks/useBlogs";
import { Blog, Post } from "../../Types/Types";
import './PostCarousel.scss'
import { useBlogContext } from "../../Hooks/useBlogContext";
export const PostCarousel = () => {
    const [blogAmound, setBlogAmound] = useState<number>(1);
    const { blogs } = useBlogs();
    console.log("blogs in PostCarousel", blogs)
    let blogArray;

    

    function currentBlog(para: number) {
        setBlogAmound(para)
    }
    
    
    const find = (blogAmound: number) => {
        setBlogAmound((blogAmound) => {
        if ( blogAmound < blogs.length) {
            return blogAmound + 1
        }
        return 1
    })
    }
    
    
        
        const postCarousel = blogs.map((blog, index) => {
            if (index+1 === blogAmound){
                const posts = blog.post?.map((post) => {
                    return (
                        <div>
                            <h2>{post.headLine}</h2>
                            <h5>{post.text}</h5>
                        </div>
                    )
                })
                return (
                <>
                    <div className="postCarousel">
                        <div className="blogFrom">Blog from {blog.userName}</div>
                        <div className="blogTitle"><h1>{blog.blogTitle}</h1></div>
                        <div className="blogPosts">{posts}</div>
                        <a className="prev" onClick={()=>find(-1)}>❮</a>
                        <a className="next" onClick={()=>find(1)}>❯</a>
                    </div>
                </>
        )}
            
        })

    useEffect(() => {
        const interval = setInterval(() => {
            setBlogAmound((blogAmound) => {
                if (blogAmound < blogs.length) {
                    return blogAmound + 1
                }
                return 1
            })
        }, 2950);
        return () => clearInterval(interval)
    })
    
    return (
        <div className="postCarouselWrapper">
            {postCarousel}
        </div>
    )
}




    // const [pictureNumber, setPictureNumber] = useState(1)

    // const showSliderPicturesArray = pictures.slice(0, 4);
    
    // function currentSlide(para: number) {
    //     setPictureNumber(para)
    // }


    // const find = (pictureNumber: number) => {
    //     if (pictureNumber < showSliderPicturesArray.length) {
    //         return pictureNumber + 1
    //     }
    //     return 1
    // }

    // function showSlides() {
    //     const findCurrentPicture = showSliderPicturesArray.find(findPict => findPict.id === pictureNumber)
      
    //     const findNextPicture = showSliderPicturesArray.find(findPict => findPict.id === find(pictureNumber))
        
    //     const makeDotsPrPicture = showSliderPicturesArray.map((e, index) => {
            
    //         if(index + 1 === findCurrentPicture?.id){
               
    //             return <div className='sliderDot active' onClick={() => currentSlide(index + 1)}></div>
    //         }
    //         return <div className='sliderDot' onClick={() => currentSlide(index + 1)}></div>
    //     })
    //     const pictures =
    //         <div className='mySlides'>
    //             <div className='imageWrapper'>
    //                 <div className='image currentPicture' key={findCurrentPicture?.id} style={{ backgroundImage: `url(${findCurrentPicture?.src})`, backgroundSize: findCurrentPicture?.pictureSize }}></div>
    //                 <div className='image nextPicture' key={findNextPicture?.id} style={{ backgroundImage: `url(${findNextPicture?.src})`, backgroundSize: findNextPicture?.pictureSize }}></div>
    //             </div>
    //             <div className='sliderDotWrapper'>
    //                 {makeDotsPrPicture}
    //             </div>
    //         </div>;

    //     return pictures
    // }
    // showSlides()

    // return (
    //     <div className="mainPictureSlideContainer">
    //         {showSlides()}
    //     </div>
    // )
