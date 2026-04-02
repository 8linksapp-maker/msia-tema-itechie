import service_data from "@/data/ServiceData"
import Link from "next/link"

const Service = () => {
   return (
      <div className="service-area bg-overlay pd-top-120 pd-bottom-90"
         style={{ backgroundImage: `url('/assets/img/bg/3.webp')` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="section-title border-radius-5 p-35 bg-base style-white mb-lg-0">
                     <h2 className="title mt-4">We provide the best IT solution</h2>
                     <p className="content">Vestibulum ante ipsum primis ibus orci luctus etultrices posuebilia rae Sed
                        aliquam nisi quis porttitor gue elitrat euismod oplacer </p>
                     <p className="content">Rae Sed aliquam nisi quis aliquam Vestibulum ante ipsum primis ibus orci
                        luctus etultrices posuebilia rae Sed aliquam nisi quis porttitor gue elitrat oplacer </p>
                     <div className="btn-wrap mt-4 pt-1 mb-4">
                        <Link className="it-btn btn-small btn-border-white mt-2 me-2" href="/contact">Contact Us</Link>
                        <Link className="it-btn btn-small btn-black mt-2" href="/service">All Service</Link>
                     </div>
                  </div>
               </div>

               <div className="col-lg-8">
                  <div className="row">
                     {service_data.filter((items) => items.page === "home_1").map((item) => (
                        <div key={item.id} className="col-md-6">
                           <div className="single-service-inner style-white text-center">
                              <div className="icon-box">
                                 <i className={item.icon} ></i>
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
         </div>
      </div>
   )
}

export default Service
