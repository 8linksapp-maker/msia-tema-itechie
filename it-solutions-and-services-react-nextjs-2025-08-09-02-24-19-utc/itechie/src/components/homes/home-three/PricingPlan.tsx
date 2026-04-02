import pricing_data from "@/data/PricingData"
import Link from "next/link"

const PricingPlan = () => {
   return (
      <div className="pricing-area half-bg-top pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-10">
                  <div className="section-title style-white text-center">
                     <h5 className="sub-title double-line">Expert Team</h5>
                     <h2 className="title">Meet with our  expert</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {pricing_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-pricing-inner style-3 text-center">
                        <div className="icon-wrap text-center">
                           <i className={item.price_icon}></i>
                        </div>
                        <div className="header">
                           <h3 className="text-center">{item.plan}</h3>
                           <div className="price">
                              <sup>$</sup>
                              <h2 className="d-inline-block">{item.price}</h2>
                              <sub> / Mo</sub>
                           </div>
                        </div>
                        <div className="details">
                           <ul className="single-list-inner">
                              {item.pricing_list.map((list, i) => (
                                 <li key={i} className={list.class_name}>{list.list}</li>
                              ))}
                           </ul>
                           <Link className="it-btn btn-black" href="#">Get Started</Link>
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
