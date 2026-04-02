import SocialIcon from "@/components/common/SocialIcon"
import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

const Team = () => {
   return (
      <div className="team-area half-bg-base-top pd-top-90">
         <div className="container">
            <div className="section-title text-center">
               <h2 className="title">Our expeart team</h2>
               <p className="content">We are one of the world’s largest cyberse</p>
            </div>
            <div className="home-cyber-team">
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
      </div>
   )
}

export default Team
