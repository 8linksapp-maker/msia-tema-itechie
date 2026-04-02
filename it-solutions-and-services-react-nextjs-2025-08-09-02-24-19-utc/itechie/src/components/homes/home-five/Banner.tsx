import Image from "next/image"
import Link from "next/link"

import bannerImg from "@/assets/img/banner/11.webp"

const Banner = () => {
   return (
      <div className="banner-area banner-area-5">
         <div className="bg-cover" style={{ backgroundImage: `url(/assets/img/home-cyber/banner-bg.webp)` }}>
            <div className="container-fluid custom-container">
               <div className="row">
                  <div className="col-lg-5 col-md-8 align-self-center ms-lg-auto order-lg-last">
                     <div className="thumb top_image_bounce mb-5 mb-lg-0">
                        <Image src={bannerImg} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-5 col-md-10 order-lg-first">
                     <div className="banner-inner style-white">
                        <h5>24/7 Cybersecurity Operation Center</h5>
                        <h1 className="title s-animate-2">
                           We Help To Protect Modern Information Form Hacker
                        </h1>
                        <div className="btn-wrap s-animate-4">
                           <Link className="it-btn btn-white me-4" href="/blog">Discover More</Link>
                           <Link className="it-btn btn-border-white" href="/contact">Discover More</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
