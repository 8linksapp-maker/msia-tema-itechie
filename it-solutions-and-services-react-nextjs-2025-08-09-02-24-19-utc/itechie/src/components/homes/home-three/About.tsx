import Image from "next/image"
import Link from "next/link"

import aboutImg_1 from "@/assets/img/about/4sm.webp"
import aboutImg_2 from "@/assets/img/about/4s.webp"
import aboutImg_3 from "@/assets/img/banner/7.webp"

const About = () => {
   return (
      <div className="about-area pd-bottom-115">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-9 mb-5 mb-lg-0">
                  <div className="about-mask-bg-wrap about-mask-bg-wrap-4">
                     <Image className="shape-image-sm top_image_bounce" src={aboutImg_1} alt="img" />
                     <Image className="shape-image" src={aboutImg_2} alt="img" />
                     <div className="thumb">
                        <Image src={aboutImg_3} alt="img" />
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title left-border">About US</h5>
                     <h2 className="title">Preparing for your success provide best it solutions.</h2>
                     <p className="content-strong mt-3">Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed consequat</p>
                     <p className="content">Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque sed imquam nunullam quis ante. Etiam sit amet orci.</p>
                     <ul className="single-list-inner style-check mt-3">
                        <li><i className="fa fa-check"></i>Client happiness</li>
                        <li><i className="fa fa-check"></i>World-class service</li>
                        <li><i className="fa fa-check"></i>Client happiness</li>
                     </ul>
                     <div className="btn-wrap mt-4">
                        <Link className="it-btn btn-base" href="/contact">Get Started</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
