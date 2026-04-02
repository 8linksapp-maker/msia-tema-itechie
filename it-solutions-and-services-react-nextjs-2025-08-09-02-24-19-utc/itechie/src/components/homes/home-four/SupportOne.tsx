import Image from "next/image"

import titleShape from "@/assets/img/about/01.webp"
import supportThumb from "@/assets/img/about/h4-2.webp"

const SupportOne = () => {
   return (
      <div className="about-area">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-9 mb-5 mb-lg-0 order-lg-last">
                  <div className="thumb right-collapse-img">
                     <Image src={supportThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 align-self-center order-lg-first">
                  <div className="section-title px-lg-5 mb-0">
                     <h2 className="title mb-4">
                        <Image src={titleShape} alt="img" />
                        Support in your door step
                     </h2>
                     <p className="content mb-lg-5">Machine learning and artificial intelligence provide business solution and delivered</p>
                     <div className="choose-wrap mt-4 pe-xl-5">
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon-number">
                                 1
                              </div>
                              <Image className="left-arrow-img" src="/assets/img/about/h4-3.webp" width={1} height={56} alt="" />
                           </div>
                           <div className="media-body">
                              <h4>Collaboration</h4>
                              <p>Learn content by interacting quis expert lesson a Collab video.</p>
                           </div>
                        </div>
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon-number">
                                 2
                              </div>
                              <Image className="left-arrow-img" src="/assets/img/about/h4-3.webp" width={1} height={56} alt="" />
                           </div>
                           <div className="media-body">
                              <h4>Easy to maintain</h4>
                              <p>Learn content by interacting quis expert lesson a video Easy.</p>
                           </div>
                        </div>
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon-number">
                                 3
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>UI/UX design</h4>
                              <p>Learn content by interacting quis expert lesson a video design.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SupportOne
