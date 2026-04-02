"use client"
import Link from "next/link"
import Slider from "react-slick";
import { useRef } from "react"

interface DataType {
   id: number;
   sub_title: string;
   title: JSX.Element;
   desc: JSX.Element;
   class_name: string;
}[];

const banner_data: DataType[] = [
   {
      id: 1,
      sub_title: "Best it solution",
      title: (<>A full-service it solution agency for <span>it business</span></>),
      desc: (<>Dcidunt eget semper nec quam. Sed hendrerit morbi <br /> ac felis. Nunc egestas augue pellentesque</>),
      class_name: "item_1"
   },
   {
      id: 2,
      sub_title: "Best it solution",
      title: (<>A full-service it solution agency for <span>it business</span></>),
      desc: (<>Dcidunt eget semper nec quam. Sed hendrerit morbi <br /> ac felis. Nunc egestas augue pellentesque</>),
      class_name: "item_2"
   },
]

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: false,
   autoplaySpeed: 1500,
   fade:true
}

const Banner = () => {

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
      <div className="banner-area banner-area-3">
         <div className="banner-slider slider-control-round owl-carousel">
            <Slider {...setting} ref={sliderRef}>
               {banner_data.map((item) => (
                  <div key={item.id} className={`item bg-overlay ${item.class_name}`}>
                     <div className="banner3-shape shape-1"></div>
                     <div className="banner3-shape shape-2"></div>
                     <div className="banner3-shape shape-3"></div>
                     <div className="container">
                        <div className="row justify-content-center">
                           <div className="col-lg-9">
                              <div className="banner-inner style-white text-center">
                                 <h4 className="sub-title s-animate-1">{item.sub_title}</h4>
                                 <h2 className="title s-animate-2">{item.title}</h2>
                                 <p className="content s-animate-3">{item.desc}</p>
                                 <div className="btn-wrap s-animate-4">
                                    <Link className="it-btn btn-base mr-space" href="/blog">Get Started</Link>
                                    <Link className="it-btn btn-black" href="/contact">Contact Us</Link>
                                 </div>
                              </div>
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
   )
}

export default Banner
