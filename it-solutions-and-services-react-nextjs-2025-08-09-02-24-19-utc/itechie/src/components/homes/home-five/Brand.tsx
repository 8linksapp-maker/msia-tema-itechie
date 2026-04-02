"use client"
import Image, { StaticImageData } from 'next/image'
import Slider from "react-slick"

import brandImg_1 from "@/assets/img/home-cyber/partner/1.webp";
import brandImg_2 from "@/assets/img/home-cyber/partner/2.webp";
import brandImg_3 from "@/assets/img/home-cyber/partner/3.webp";
import brandImg_4 from "@/assets/img/home-cyber/partner/4.webp";

const brand_data: StaticImageData[] = [brandImg_1, brandImg_2, brandImg_3, brandImg_4, brandImg_3];

const setting = {
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: false,
   autoplay: true,
   fade: false,
   autoplaySpeed: 2000,
   responsive: [
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 4,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 375,
         settings: {
            slidesToShow: 1,
         }
      }
   ],
}

const Brand = () => {
   return (
      <div className="client-area pd-bottom-120">
         <div className="container">
            <div className="client-slider-home-5">
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
      </div>
   )
}

export default Brand
