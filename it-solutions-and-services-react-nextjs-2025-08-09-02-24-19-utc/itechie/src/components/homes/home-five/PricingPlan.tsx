import pricing_data from "@/data/PricingData"
import Image from "next/image"
import Link from "next/link"

const PricingPlan = () => {
   return (
      <div className="pricing-area pd-top-110">
         <div className="container">
            <div className="section-title text-center">
               <div className="row justify-content-center">
                  <div className="col-lg-7">
                     <h2 className="title">
                        Great Price Plan For You
                     </h2>
                     <p className="content mt-2">We are one of the world’s largest cyberse</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {pricing_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-pricing-inner style-5 text-center">
                        <div className="icon text-center mb-4 pb-2 pt-3">
                           <Image src={item.price_icon_img ? item.price_icon_img : ""} alt="img" />
                        </div>
                        <div className="header">
                           <div className="price mb-2">
                              <h2 className="d-inline-block">{item.price}</h2>
                              <sub> {item.sub_price}</sub>
                           </div>
                           <h6 className="text-center">{item.plan}</h6>
                        </div>
                        <div className="details pt-3">
                           <ul className="single-list-inner">
                              {item.pricing_list.map((list, i) => (
                                 <li key={i}>{list.list}</li>
                              ))}
                           </ul>
                           <Link className="it-btn btn-border-base" href="#">Subscrive Now</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PricingPlan
