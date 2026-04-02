"use client"
import inner_blog_data from "@/data/InnerBlogData"
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import ReactPaginate from "react-paginate"
import Slider from "react-slick"
import BlogSidebar from "./BlogSidebar"

const setting = {
   infinite: true,
   speed: 1500,
   slidesToShow: 1,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   // autoplay: false,
   // autoplaySpeed: 1500,
}

const BlogArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);
   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   const blogs = inner_blog_data;

   const itemsPerPage = 3;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blogs.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blogs.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % blogs.length;
      setItemOffset(newOffset);
   };

   return (
      <>
      <div className="blog-area pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  {currentItems.map((item) => (
                     <div key={item.id} className="single-blog-inner">
                        {item.img && <div className="thumb">
                           <Image src={item.img} alt="img" />
                           {item.video_btn && <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play-btn video-play-btn-base" data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>}
                        </div>}
                        {item.carousel &&
                           <div className="slider-control-round blog-slider">
                              <Slider {...setting} ref={sliderRef} className="owl-carousel blog-thumb-slider">
                                 {item.carousel.map((carousel, i) => (
                                    <div key={i} className="item">
                                       <Image src={carousel} alt="img" />
                                    </div>
                                 ))}
                              </Slider>
                              <div className="owl-nav">
                                 <button onClick={handlePrevClick} type="button" role="presentation" className="owl-prev">
                                    <i className="fas fa-arrow-left"></i>
                                 </button>
                                 <button onClick={handleNextClick} type="button" role="presentation" className="owl-next">
                                    <i className="fas fa-arrow-right"></i>
                                 </button>
                              </div>
                           </div>}
                        <div className="details">
                           <h2><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h2>
                           <ul className="blog-meta">
                              <li><i className="far fa-user"></i> By Admin</li>
                              <li><i className="far fa-calendar-alt me-2"></i>{item.date}</li>
                              <li><i className="far fa-comment-dots"></i> {item.comment} Comment</li>
                              <li><i className="far fa-folder-open"></i> It Solution</li>
                           </ul>
                           <p>{item.desc}</p>
                           <Link className="read-more-text" href={`/blog-details/${item.id}`}>Read More <i className="fa fa-caret-right"></i></Link>
                        </div>
                     </div>
                  ))}

                  <div className="pagination">
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="fa fa-angle-left"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={4}
                        pageCount={pageCount}
                        previousLabel={<i className="fa fa-angle-right"></i>}
                        renderOnZeroPageCount={null}
                     />
                  </div>
               </div>

               <div className="col-lg-4 col-12">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default BlogArea
