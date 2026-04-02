"use client"
import project_data from "@/data/ProjectData"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import Slider from "react-slick"
import { useState } from "react";
import ImagePopup from "@/modals/ImagePopup";

const setting = {
   infinite: true,
   speed: 1500,
   slidesToShow: 3,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 480,
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


   // photoIndex
   const [photoIndex, setPhotoIndex] = useState(null);
   // image open state
   const [isOpen, setIsOpen] = useState(false);
   // handleImagePopup
   const handleImagePopup = (i: any) => {
      setPhotoIndex(i);
      setIsOpen(true);
   };
   //  images
   const images = project_data.filter((items)=>items.page==="home_2").map((item)=>item.img);
console.log(images,"images")
   return (
      <>
         <div className="project-area half-bg-top pd-top-115">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-10">
                     <div className="section-title style-white text-center">
                        <h5 className="sub-title double-border">Work Process</h5>
                        <h2 className="title">How to work it</h2>
                        <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                     </div>
                  </div>
               </div>

               <div className="project-slider slider-control-round bg-relative">
                  <Slider {...setting} ref={sliderRef} className="owl-carousel">
                     {project_data.filter((items) => items.page === "home_2").map((item,index) => (
                        <div key={index} className="item">
                           <div className="single-project-inner">
                              <div className="thumb">
                                 <a onClick={() => handleImagePopup(index)} className="icon swp-readmore-arrow swp-image-popup" style={{ cursor: "pointer" }}>
                                    <i className="fas fa-search-minus"></i>
                                 </a>
                                 <Image src={item.img} alt="img" />
                              </div>
                              <div className="details-wrap">
                                 <div className="details-inner">
                                    <h3><Link href="/project-details">{item.title}</Link></h3>
                                    <p>{item.desc}</p>
                                 </div>
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
         </div>
         {isOpen && (
            <ImagePopup
               images={images}
               setIsOpen={setIsOpen}
               photoIndex={photoIndex}
               setPhotoIndex={setPhotoIndex}
            />
         )}
      </>
   )
}

export default Project
