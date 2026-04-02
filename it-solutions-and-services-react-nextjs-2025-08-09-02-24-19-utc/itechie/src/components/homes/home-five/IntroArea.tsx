import intro_data from "@/data/IntroData"
import Image from "next/image"

const IntroArea = () => {
   return (
      <div className="intro-area pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {intro_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-intro-inner style-five text-center">
                        <div className="thumb">
                           <Image src={item.icon_img ? item.icon_img : ""} alt="img" />
                           <Image className="img-hover" src={item.hover_icon_img ? item.hover_icon_img : ""} alt="img" />
                        </div>
                        <div className="details">
                           <h4>{item.title}</h4>
                           <p>{item.desc} </p>
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
