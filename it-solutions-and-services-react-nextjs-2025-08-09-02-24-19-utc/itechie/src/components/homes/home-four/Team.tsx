import SocialIcon from "@/components/common/SocialIcon"
import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

import teamShape from "@/assets/img/about/01.webp"

const Team = () => {
   return (
      <div className="team-area pd-top-90 pd-bottom-90">
         <div className="container">
            <div className="section-title">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8">
                     <h2 className="title">
                        <Image src={teamShape} alt="img" />
                        Support in your door step
                     </h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
                  <div className="col-lg-6 col-md-4 align-self-center mt-4 mt-md-0">
                     <div className="btn-wrap text-md-end">
                        <a className="it-btn btn-base" href="team.html">Discover More</a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               {team_data.filter((items) => items.page === "home_1").slice(0,3).map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-team-inner style-4 text-center">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                        </div>
                        <div className="details-wrap">
                           <div className="details-inner">
                              <h4><Link href="/team-details">{item.title}</Link></h4>
                              <p>{item.designation}</p>
                           </div>
                        </div>
                        <div className="hover-details-wrap">
                           <div className="hover-details-inner">
                              <h4><Link href="/team-details">{item.title}</Link></h4>
                              <p>{item.designation}</p>
                              <ul className="social-media mt-3">
                                 <SocialIcon />
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Team
