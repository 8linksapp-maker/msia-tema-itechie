"use client"
import project_data from "@/data/ProjectData"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import Slider from "react-slick"

const setting = {
   infinite: true,
   speed: 1500,
   slidesToShow: 5,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 1500,
   responsive: [
      {
         breakpoint: 1600,
         settings: {
            slidesToShow: 5
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 4
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1
         }
      },
   ]
}

const Project = () => {

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

   return (
      <div className="project-area bg-banner pd-top-115">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-7">
                  <div className="section-title style-white text-center">
                     <h5 className="sub-title double-line">Case Study</h5>
                     <h2 className="title">Our latest case study for your business</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="project-slider-2 slider-control-square owl-carousel">
            <Slider {...setting} ref={sliderRef}>
               {project_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="item">
                     <div className="single-project-inner style-two">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                        </div>
                        <div className="details-wrap">
                           <h3><Link href="/project-details">Data solution</Link></h3>
                           <Link href="/project-details">Discover More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
            <div className="owl-nav disabled">
               <button onClick={handlePrevClick} type="button" role="presentation" className="owl-prev">
                  <i className="fas fa-arrow-left"></i>
               </button>
               <button onClick={handleNextClick} type="button" role="presentation" className="owl-next">
                  <i className="fas fa-arrow-right"></i>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Project
