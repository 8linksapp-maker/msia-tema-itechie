"use client"
import Slider from 'react-slick'
import Count from "@/components/common/Count";
import testimonial_data from "@/data/TestimonialData"
import Image from "next/image"

interface DataType {
   count: number;
   count_text: string;
   desc: JSX.Element;
}[];

const counter_data: DataType[] = [
   {
      count: 20,
      count_text: "mil",
      desc: (<>Users downloaded <br /> & installation</>),
   },
   {
      count: 33,
      count_text: "b+",
      desc: (<>Transactions <br /> Everyday</>),
   },
   {
      count: 40,
      count_text: "mil+",
      desc: (<>Happy client satisfied <br />  on worldwide</>),
   },
]

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
      <div className="testimonial-area pd-top-120 bg-cover" style={{ backgroundImage: `url(/assets/img/testimonial/3.webp)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-8 col-md-9">
                  <Slider {...setting} className="testimonial-slider-3 owl-carousel" data-slider-id="1">
                     {testimonial_data.filter((items) => items.page === "home_4").map((item) => (
                        <div key={item.id} className="single-testimonial-inner style-three text-center">
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

         <div className="counter-area mg-top-90">
            <div className="container">
               <div className="counter-area-2">
                  <div className="row">
                     {counter_data.map((item, i) => (
                        <div key={i} className="col-md-4">
                           <div className="single-exp-inner style-4 text-center">
                              <h2><span className="counter"><Count number={item.count} /></span> <span>{item.count_text}</span></h2>
                              <h5>{item.desc}</h5>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonial
