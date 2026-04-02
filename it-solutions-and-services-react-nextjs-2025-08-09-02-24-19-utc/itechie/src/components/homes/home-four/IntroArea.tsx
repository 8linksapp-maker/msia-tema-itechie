import intro_data from "@/data/IntroData"
import Image from "next/image"

const IntroArea = () => {
   return (
      <div className="intro-area mg-top-110 bg-relative">
         <div className="container">
            <div className="row justify-content-center">
               {intro_data.filter((items) => items.page === "home_4").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-intro-inner style-two text-center">
                        <div className="thumb">
                           <div className="media-left mb-3">
                              <Image src={item.icon_img ? item.icon_img : ""} alt="img" />
                           </div>
                           <div className="media-body align-self-center">
                              <h4>{item.title}</h4>
                           </div>
                        </div>
                        <div className="details">
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default IntroArea
