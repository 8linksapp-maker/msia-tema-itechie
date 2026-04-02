"use client"
import testimonial_data from "@/data/TestimonialData"
import Image from "next/image"
import Slider from "react-slick"

import testimonialThumb from "@/assets/img/about/h5-1.webp"

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1500
}

const Testimonial = () => {
   return (
      <div className="testimonial-area pt-5 bg-cover">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5 align-self-center">
                  <div className="thumb mb-4 mb-lg-0">
                     <Image src={testimonialThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 offset-xl-1 align-self-center">
                  <Slider {...setting} className="testimonial-slider-3 owl-carousel" data-slider-id="1">
                     {testimonial_data.filter((items) => items.page === "home_5").map((item) => (
                        <div key={item.id} className="single-testimonial-inner style-four">
                           <div className="thumb">
                              <Image src={item.img} alt="img" />
                           </div>
                           <div className="details">
                              <p>{item.desc}</p>
                              <h2>{item.name}</h2>
                              <span>{item.designation}</span>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonial
