"use client"
import VideoPopup from "@/modals/VideoPopup";
import { useState } from "react";

const VideoArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="video-area text-center pd-top-115 pd-bottom-120"
            style={{ backgroundImage: `url(/assets/img/bg/7.webp)` }}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-10">
                     <div className="section-title mb-4 style-white">
                        <h2 className="title">We Care About Your Life’s Important Things</h2>
                     </div>
                     <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play-btn video-play-btn-base" data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                  </div>
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

export default VideoArea
