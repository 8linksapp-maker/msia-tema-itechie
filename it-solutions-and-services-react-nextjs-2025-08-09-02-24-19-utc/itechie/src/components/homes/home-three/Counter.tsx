"use client"
import Count from "@/components/common/Count"
import counter_data from "@/data/CounterData"
import VideoPopup from "@/modals/VideoPopup"
import { useState } from "react";

const Counter = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="counter-area bg-overlay-black pd-top-110 pd-bottom-110" style={{ backgroundImage: `url(/assets/img/bg/7.webp)` }}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="section-title style-white">
                        <h2 className="title">We Care About Your Important Things</h2>
                     </div>
                  </div>
               </div>
               
               <div className="row">
                  <div className="col-md">
                     <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play-btn mb-5 mb-md-0 video-play-btn-base" data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                  </div>
                  {counter_data.filter((items) => items.page === "home_2").map((item, i) => (
                     <div key={item.id} className="col-md">
                        <div className="single-exp-inner style-white">
                           <h2><span className="counter"><Count number={item.count} /></span> <sub>{item.counter_text}</sub></h2>
                           <h5>{item.title}</h5>
                        </div>
                     </div>
                  ))}
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

export default Counter
