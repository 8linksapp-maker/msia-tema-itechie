"use client"
import testimonial_data from "@/data/TestimonialData"
import Image from "next/image"
import Slider from "react-slick"
import { useRef } from "react"

import testiIcon from "@/assets/img/testimonial/01.webp"

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
         breakpoint: 576,
         settings: {
            slidesToShow: 1
         }
      },
   ]
}

const Testimonial = () => {

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
      <div className="testimonial-area half-bg-top pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="section-title style-white text-center">
                     <h5 className="sub-title double-line">Feedback</h5>
                     <h2 className="title">What say our happy client</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
               </div>
            </div>
            <div className="testimonial-slider-2 bg-relative  slider-control-round">
               <Slider {...setting} ref={sliderRef} className="">
                  {testimonial_data.filter((items) => items.page === "home_3").map((item) => (
                     <div key={item.id} className="item">
                        <div className="single-testimonial-inner style-3 text-center">
                           <Image className="shaddow-img" src={testiIcon} alt="img" />
                           <div className="thumb">
                              <Image src={item.img} alt="img" />
                           </div>
                           <div className="details">
                              <p>{item.desc}</p>
                              <h4>{item.name}</h4>
                              <span className="designation">{item.designation}</span>
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
   )
}

export default Testimonial
