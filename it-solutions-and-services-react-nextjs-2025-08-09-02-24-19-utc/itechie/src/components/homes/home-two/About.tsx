"use client"
import Image from "next/image"
import { useState } from "react"

import aboutThumb from "@/assets/img/about/3.webp";

const tab_title: string[] = ["Our Mission", "Our Vission",];

const tab_content: JSX.Element[] = [
   (<>Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque sed imquam nunullam quis ante. Etiam sit amet orci.</>),
   (<>Etiam sit amet orci. Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque sed imquam nunullam quis ante.</>),
]

const About = () => {

   // Define state to keep track of the active tab
   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <div className="about-area pd-top-90 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="mask-bg-wrap mask-bg-img-3">
                     <div className="thumb">
                        <Image src={aboutThumb} alt="img" />
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6 align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title left-border">About US</h5>
                     <h2 className="title">We are Working world With 15+ Years</h2>
                     <p className="content-strong mt-2">Duis leo. Sed fringilla mauris siamet nibh. odales sagittis
                        magna. Sed consequat</p>
                     <ul className="nav nav-tabs tab-button-style mt-4" id="myTab" role="tablist">
                        {tab_title.map((tab, index) => (
                           <li key={index} className="nav-item">
                              <button onClick={() => handleTabClick(index)} className={activeTab === index ? 'nav-link active' : 'nav-link'}>
                                 {tab}
                              </button>
                           </li>
                        ))}
                     </ul>

                     <div className="tab-content" id="myTabContent">
                        {tab_content.map((content, index) => (
                           <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="home">
                              <p className="content mt-4">{content}</p>
                              <div className="list-wrap mt-4">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <ul className="single-list-inner">
                                          <li>Client happiness</li>
                                          <li>World-class service</li>
                                       </ul>
                                    </div>
                                    <div className="col-lg-6">
                                       <ul className="single-list-inner">
                                          <li>Client happiness</li>
                                          <li>World-class service</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
