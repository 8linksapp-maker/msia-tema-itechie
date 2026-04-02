"use client"
import Image, { StaticImageData } from "next/image"
import { useState } from "react";

import bannerImg from "@/assets/img/home-cyber/tab/1.webp"
import bannerListImg from "@/assets/img/home-cyber/tab/icon-shild.webp"

const tab_title: string[] = ["Our Valus", "Tranparency", "Our Mission", "History"];

interface DataType {
   desc: JSX.Element;
   list: {
      icon: StaticImageData;
      title: string;
   }[];
}[];

const tab_content: DataType[] = [
   {
      desc: (<>Consistently, your association&apos;s way of life turns out to be more essential to its prosperity. Are the standards directing your association the most ideal to take care of the issues you&apos;re confronting?</>),
      list: [{ icon: bannerListImg, title: "Quo fastidii perpetua reprimique impetus utroque" }, { icon: bannerListImg, title: "Has at erat nominavi, id quod delicat quo sed lorem set." }],
   },
   {
      desc: (<>Consistently, your association&apos;s way of life turns out to be more essential to its prosperity. Are the standards directing your association the most ideal to take care of the issues you&apos;re confronting?</>),
      list: [{ icon: bannerListImg, title: "Quo fastidii perpetua reprimique impetus utroque" }, { icon: bannerListImg, title: "Has at erat nominavi expetendis, id quod delicat quo sed lorem set impetus." }],
   },
   {
      desc: (<>Consistently, your association&apos;s way of life turns out to be more essential to its prosperity. Are the standards directing your association the most ideal to take care of the issues you&apos;re confronting?</>),
      list: [{ icon: bannerListImg, title: "Quo fastidii perpetua reprimique impetus utroque" }, { icon: bannerListImg, title: "Has at erat nominavi, id quod delicat quo sed lorem set." }],
   },
   {
      desc: (<>Consistently, your association&apos;s way of life turns out to be more essential to its prosperity. Are the standards directing your association the most ideal to take care of the issues you&apos;re confronting?</>),
      list: [{ icon: bannerListImg, title: "Quo fastidii perpetua reprimique impetus utroque" }, { icon: bannerListImg, title: "Has at erat nominavi expetendis, id quod delicat quo sed lorem set impetus." }],
   },
]

const AboutOne = () => {

   // Define state to keep track of the active tab
   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <div className="about-area pd-bottom-120 px-lg-0 px-md-5 px-4">
         <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-9">
               <div className="thumb mb-4 mb-lg-0">
                  <Image src={bannerImg} alt="img" />
               </div>
            </div>
            <div className="col-lg-6 align-self-center">
               <div className="section-title px-lg-5 mb-0">
                  <h2 className="title mb-4">Oversee risk and speed up your business advancement and security at a similar speed.</h2>
               </div>
               <div className="about-tab-5 px-lg-5">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                     {tab_title.map((tab, index) => (
                        <li key={index} className="nav-item">
                           <button onClick={() => handleTabClick(index)} className={activeTab === index ? 'nav-link active' : 'nav-link'}>
                              {tab}
                           </button>
                        </li>
                     ))}
                  </ul>

                  <div className="tab-content" id="pills-tabContent">
                     {tab_content.map((item, index) => (
                        <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="pills-home">
                           <p>{item.desc}</p>
                           <ul>
                              {item.list.map((list, index) => (
                                 <li key={index} className="align-self-center">
                                    <div className="icon">
                                       <Image src={list.icon} alt="img" />
                                    </div>
                                    {list.title}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutOne
