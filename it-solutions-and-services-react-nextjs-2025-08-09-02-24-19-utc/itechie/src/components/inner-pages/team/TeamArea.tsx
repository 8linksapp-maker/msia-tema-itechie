import SocialIcon from "@/components/common/SocialIcon"
import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

const TeamArea = () => {
   return (
      <div className="team-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row">
               {team_data.filter((items) => items.page === "inner_page").map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="single-team-inner text-center">
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

export default TeamArea
