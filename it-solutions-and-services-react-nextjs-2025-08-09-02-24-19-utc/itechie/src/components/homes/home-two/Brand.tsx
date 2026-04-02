"use client"
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick"

import brandImg_1 from "@/assets/img/client/5.webp";
import brandImg_2 from "@/assets/img/client/6.webp";
import brandImg_3 from "@/assets/img/client/7.webp";
import brandImg_4 from "@/assets/img/client/8.webp";

const brand_data: StaticImageData[] = [brandImg_1, brandImg_2, brandImg_3, brandImg_4, brandImg_2,];

const setting = {
   loop: true,
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: false,
   autoplaySpeed: 1500,
   responsive: [
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 4
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 0,
         settings: {
            slidesToShow: 1
         }
      },
   ]
}

const Brand = () => {
   return (
      <div className="client-area-area bg-base pt-5 pb-5">
         <div className="container">
            <Slider {...setting} className="client-slider owl-carousel">
               {brand_data.map((brand, i) => (
                  <div key={i} className="item">
                     <div className="thumb text-center">
                        <Image src={brand} alt="img" />
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default Brand
