import { useEffect, useState } from "react";
import { useBlogs } from "../../Hooks/useBlogs";
import { Post } from "../../Types/Types";
import './PostCarousel.scss'
export const PostCarousel = () => {
    const [blogAmound, setBlogAmound] = useState<number>(1);
    const { blogs } = useBlogs();

    
    function currentBlog(para: number) {
        setBlogAmound(para)
    }
    
    
    const find = (blogAmound: number) => {
        if (blogAmound < blogs.length) {
            return blogAmound + 1
        }
        return 1
    }
    
    // function showPostCarousel() {
        
        const postCarousel = blogs.map((blog, index) => {
            
            const posts = blog.post?.map((post) => {
                return <h5>{post.headLine}</h5>
            })
            return (
                <div className="postCarouselWrapper">
                    <div className="postCarousel">
                        <h1>{blog.blogTitle}</h1>
                        <div>{posts}</div>
                    </div>
                </div>
            )
        })

        // const findCurrentBlog = blogs.find(findBlog => findPict.id === blogAmound)
        
        // const findNextPicture = showSliderPicturesArray.find(findPict => findPict.id === find(blogAmound))
        
        // const makeDotsPrPicture = showSliderPicturesArray.map((e, index) => {
            
        //     if(index + 1 === findCurrentPicture?.id){
               
        //         return <div className='sliderDot active' onClick={() => currentSlide(index + 1)}></div>
        //     }
        //     return <div className='sliderDot' onClick={() => currentSlide(index + 1)}></div>
        // })
        // const blogCarousel =
        //     <div className='mySlides'>
        //         <div className='imageWrapper'>
        //             <div className='image currentPicture' key={findCurrentPicture?.id} style={{ backgroundImage: `url(${findCurrentPicture?.src})`, backgroundSize: findCurrentPicture?.pictureSize }}></div>
        //             <div className='image nextPicture' key={findNextPicture?.id} style={{ backgroundImage: `url(${findNextPicture?.src})`, backgroundSize: findNextPicture?.pictureSize }}></div>
        //         </div>
        //         <div className='sliderDotWrapper'>
        //             {makeDotsPrPicture}
        //         </div>
        //     </div>;

        // return blogCarousel

    // }
    // showPostCarousel()

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
    console.log(blogAmound)
    return (
        <div className="mainPictureSlideContainer">
            {postCarousel}
            {/* {showPostCarousel()} */}
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
