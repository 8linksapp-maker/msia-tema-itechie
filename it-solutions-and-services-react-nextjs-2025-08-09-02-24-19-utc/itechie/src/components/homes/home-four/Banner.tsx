import Image from "next/image"
import Link from "next/link"

import bannerImg_1 from "@/assets/img/banner/10.webp"
import bannerImg_2 from "@/assets/img/banner/8.webp"

const Banner = () => {
   return (
      <div className="banner-area banner-area-4">
         <div className="bg-cover" style={{ backgroundImage: `url(/assets/img/banner/9.webp)` }}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-10">
                     <div className="banner-inner style-white">
                        <h2 className="title s-animate-2">
                           <Image className="title-line" src={bannerImg_1} alt="img" />
                           Simple ticketing system for teams
                        </h2>
                        <div className="btn-wrap s-animate-4">
                           <Link className="it-btn btn-white mr-space" href="/blog">Free 15-Days Trial</Link>
                           <Link className="it-btn btn-border-white" href="/contact">Watch A Demo</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-8 align-self-center">
                     <div className="thumb top_image_bounce">
                        <Image src={bannerImg_2} alt="img" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
