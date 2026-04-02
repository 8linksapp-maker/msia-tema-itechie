import SocialIcon from "@/components/common/SocialIcon"
import team_data from "@/data/TeamData"
import Image from "next/image"

const Team = () => {
   return (
      <div className="team-area bg-blue pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="section-title style-white text-center">
                     <h5 className="sub-title double-line">Expert Team</h5>
                     <h2 className="title">Meet with our expert</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
               </div>
            </div>
            
            <div className="row">
               {team_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="single-team-inner style-2 text-center">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                        </div>
                        <div className="details-wrap">
                           <div className="details-inner">
                              <h4><a href="team-details.html">{item.title}</a></h4>
                              <p>{item.designation}</p>
                              <ul className="social-media mt-3 mb-2">
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
