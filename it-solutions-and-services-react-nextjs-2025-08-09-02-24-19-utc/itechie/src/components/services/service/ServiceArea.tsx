import service_data from "@/data/ServiceData"
import Link from "next/link"

const ServiceArea = () => {
   return (
      <div className="service-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row">
               {service_data.filter((items) => items.page === "inner_page").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-service-inner style-hover-base text-center">
                        <div className="icon-box">
                           <i className={item.icon}></i>
                        </div>
                        <div className="details">
                           <h3><Link href="/service-details">{item.title}</Link></h3>
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

export default ServiceArea
