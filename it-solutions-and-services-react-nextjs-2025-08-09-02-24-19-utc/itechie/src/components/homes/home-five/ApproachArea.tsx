import Image, { StaticImageData } from "next/image"

import approachThumb_1 from "@/assets/img/home-cyber/tab/3.webp";
import approachIcon_1 from "@/assets/img/home-cyber/about/icon-3.webp";
import approachIcon_2 from "@/assets/img/home-cyber/about/icon-4.webp";
import approachIcon_3 from "@/assets/img/home-cyber/about/icon-5.webp";

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: JSX.Element;
   class_name?:string;
}

const approach_data: DataType[] = [
   {
      id: 1,
      class_name:"border-bottom",
      icon: approachIcon_1,
      title: "Check And Search Hazards",
      desc: (<>Collect and review information about the hazards present or likely to be present in the workplace. Conduct initial and periodic workplace inspections</>),
   },
   {
      id: 2,
      class_name:"border-bottom",
      icon: approachIcon_2,
      title: "Departure Of The Our Experts",
      desc: (<>Think about an airport that has departure gates for outgoing passengers and ... Boost your test score with programs developed by Vocabulary.com&apos;s experts.</>),
   },
   {
      id: 3,
      icon: approachIcon_3,
      title: "Install And Configure Software",
      desc: (<>Initiating and configuring software is a normal part of any software install but may vary. This could be as simple as filling in user details to configuring</>),
   },
]

const ApproachArea = () => {
   return (
      <div className="row pd-top-110">
         <div className="col-lg-6 col-md-9 px-xl-5 align-self-center">
            <div className="thumb mb-4 mb-lg-0">
               <Image src={approachThumb_1} alt="img" />
            </div>
         </div>
         <div className="col-lg-5 align-self-center">
            <div className="section-title">
               <h2 className="title mb-4">Our Approach To Security</h2>
               <p>AI technology is perfect for best business solutions & we offer help to achieve your goals.</p>
            </div>
            {approach_data.map((item) => (
               <div key={item.id} className="single-security-wrap-2">
                  <div className={`thumb ${item.class_name}`}>
                     <Image src={item.icon} alt="img" />
                  </div>
                  <div className="details">
                     <h5>{item.title}</h5>
                     <p>{item.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default ApproachArea
