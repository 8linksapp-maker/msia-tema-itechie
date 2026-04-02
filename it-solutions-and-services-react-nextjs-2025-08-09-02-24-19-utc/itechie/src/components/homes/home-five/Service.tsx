import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

const Service = () => {
   return (
      <div className="service-area-5 pd-top-120 pd-bottom-120" style={{ backgroundColor: "#F8F9FE" }}>
         <div className="container">
            <div className="section-title">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8">
                     <h2 className="title text-center">
                        Cybersecurity Service
                     </h2>
                     <p className="content text-center">We are one of the world’s largest cybersecurity companies</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {service_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-service-inner style-5 text-center">
                        <div className="thumb">
                           <Image src={item.icon_img ? item.icon_img : ""} alt="img" />
                           <Image className="icon" src={item.hover_icon_img ? item.hover_icon_img : ""} alt="img" />
                        </div>
                        <div className="details-wrap">
                           <h4><Link href="/service-details">{item.title}</Link></h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
               
               <div className="col-12">
                  <div className="btn-wrap text-center mt-5">
                     <Link className="it-btn btn-gradient" href="/service-details">Discover More</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service
