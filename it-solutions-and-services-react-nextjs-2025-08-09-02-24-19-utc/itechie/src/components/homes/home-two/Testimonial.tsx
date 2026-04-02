"use client"
import React from "react";
import Slider from 'react-slick'
import Image, { StaticImageData } from "next/image"
import testimonial_data from "@/data/TestimonialData";

import testimonialShape_1 from "@/assets/img/about/1sm.webp";
import testimonialShape_2 from "@/assets/img/about/1s.webp";

import testiThumb_1 from "@/assets/img/team/1.webp";
import testiThumb_2 from "@/assets/img/team/2.webp";
import testiThumb_3 from "@/assets/img/team/3.webp";
import testiThumb_4 from "@/assets/img/team/4.webp";

interface DataType {
   img: StaticImageData;
   class_name: string;
}[];

const testi_small_img_data: DataType[] = [
   {
      img: testiThumb_1,
      class_name: "owl-thumb-item-1",
   },
   {
      img: testiThumb_2,
      class_name: "owl-thumb-item-2",
   },
   {
      img: testiThumb_3,
      class_name: "owl-thumb-item-3",
   },
   {
      img: testiThumb_4,
      class_name: "owl-thumb-item-4",
   },
   {
      img: testiThumb_1,
      class_name: "owl-thumb-item-5",
   },
   {
      img: testiThumb_2,
      class_name: "owl-thumb-item-6",
   },
];

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
      <div className="testimonial-area pd-top-90 bg-cover bg-cover-70"
         style={{ backgroundImage: `url(/assets/img/other/map.webp)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-8 col-md-9">
                  <Slider {...setting} className="testimonial-slider-3 owl-carousel" data-slider-id="1">
                     {testimonial_data.filter((items) => items.page === "home_2").map((item) => (
                        <div key={item.id}>
                           <div className="single-testimonial-inner style-two text-center">
                              <div className="about-mask-bg-wrap about-mask-bg-wrap-1">
                                 <Image className="shape-image-sm top_image_bounce" src={testimonialShape_1} alt="img" />
                                 <Image className="shape-image" src={testimonialShape_2} alt="img" />
                                 <div className="thumb">
                                    <Image src={item.img} alt="img" />
                                 </div>
                              </div>
                              <div className="details">
                                 <h2>{item.name}</h2>
                                 <span>{item.designation}</span>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>

            <div className="owl-thumbs testimonial-slider-3-thumb" data-slider-id="1">
               {testi_small_img_data.map((item, index) => (
                  <button key={index} className={`owl-thumb-item ${item.class_name}`}>
                     <div className="about-mask-bg-wrap about-mask-bg-wrap-3">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                        </div>
                     </div>
                  </button>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Testimonial
