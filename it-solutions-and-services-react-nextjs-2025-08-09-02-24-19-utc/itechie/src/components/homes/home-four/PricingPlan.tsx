import Image, { StaticImageData } from "next/image";

import pricingIcon_1 from "@/assets/img/icon/pricing-1.webp"
import pricingShape from "@/assets/img/about/01.webp"
import Link from "next/link";

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   price: number;
   price_list: string[];
}[];

const pricing_data: DataType[] = [
   {
      id: 1,
      icon: pricingIcon_1,
      title: "Business Classic",
      price: 56,
      price_list: ["Graphic Design", "Web Design", "SEO Marketing", "Business", "Analysis"],
   },
   {
      id: 2,
      icon: pricingIcon_1,
      title: "Business Classic",
      price: 56,
      price_list: ["Graphic Design", "Web Design", "SEO Marketing", "Business", "Analysis"],
   },
   {
      id: 3,
      icon: pricingIcon_1,
      title: "Business Classic",
      price: 56,
      price_list: ["Graphic Design", "Web Design", "SEO Marketing", "Business", "Analysis"],
   },
]
const PricingPlan = () => {
   return (
      <div className="pricing-area pd-top-100">
         <div className="container">
            <div className="section-title text-center">
               <div className="row justify-content-center">
                  <div className="col-lg-7">
                     <h2 className="title">
                        Solo, Agency or Team? We’ve got you
                        <span> Covered<Image src={pricingShape} alt="img" /></span>
                     </h2>
                     <p className="content mt-2">Machine learning and artificial intelligence provide business solution and delivered mauris siamet nibh. odales sagittis magna. Sed</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-pricing-inner style-4 text-center">
                        <div className="icon text-center">
                           <Image src={item.icon} alt="img" />
                        </div>
                        <div className="header">
                           <h3 className="text-center">{item.title}</h3>
                           <div className="price">
                              <h2 className="d-inline-block">{item.price}</h2>
                              <sub> .00$</sub>
                           </div>
                        </div>
                        <div className="details">
                           <ul className="single-list-inner">
                              {item.price_list.map((list, i) => (<li key={i}>{list}</li>))}
                           </ul>
                           <Link className="it-btn btn-black" href="#">Subscrive Now</Link>
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
