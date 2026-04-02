import SocialIcon from "@/components/common/SocialIcon"
import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

const Team = () => {
   return (
      <div className="team-area pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Expert Team</h5>
                     <h2 className="title">Meet with our expert</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {team_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="single-team-inner style-1 text-center">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                           <ul className="social-media">
                              <SocialIcon />
                           </ul>
                        </div>
                        <div className="details-wrap">
                           <div className="details-inner">
                              <h4><Link href="/team-details">{item.title}</Link></h4>
                              <p>{item.designation}</p>
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
