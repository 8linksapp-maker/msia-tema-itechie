"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import inner_project_data from "@/data/InnerProjectData";

const project_data = inner_project_data.filter((items) => items.page === "project_1");

const tab_titles: string[] = ["All Items", "Site Templates", "UI Templates", "UX Templates"];

const Project = () => {
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   const getFilteredProjects = () => {
      switch (activeTab) {
         case 0:
            return project_data;
         case 1:
            return project_data.slice(0, 2);
         case 2:
            return project_data.slice(1, 3);
         case 3:
            return [project_data[1]];
         default:
            return [];
      }
   };

   const filteredProjects = getFilteredProjects();

   return (
      <section className="project-area bg-cover pd-top-115 pd-bottom-90" style={{ backgroundImage: `url(/assets/img/bg/10.webp)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-9">
                  <div className="section-title style-white text-center">
                     <h5 className="sub-title double-border">Our project</h5>
                     <h2 className="title">Introduce Our Projects</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="isotope-filters project-isotope-btn style-white text-center mb-5">
                     {tab_titles.map((tab, index) => (
                        <button key={index} onClick={() => handleTabClick(index)} className={`button ${activeTab === index ? "active" : ""}`}>
                           {tab}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <div className="all-item-section">
               <div className="project-isotope row">
                  {filteredProjects.map((item) => (
                     <div key={item.id} className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-3">
                        {item.item_two ? (
                           item.item_two.map((item) => (
                              <div key={item.id} className="single-project-inner style-two">
                                 <div className="thumb">
                                    <Image src={item.thumb} alt="img" />
                                 </div>
                                 <div className="details-wrap">
                                    <h3><Link href="/project-details">{item.title}</Link></h3>
                                    <Link href="/project-details">{item.desc} <i className="fas fa-arrow-right"></i></Link>
                                 </div>
                              </div>
                           ))
                        ) : (
                           <div className="single-project-inner style-two">
                              <div className="thumb">
                                 <Image src={item.thumb ? item.thumb : ""} alt="img" />
                              </div>
                              <div className="details-wrap">
                                 <h3><Link href="/project-details">{item.title}</Link></h3>
                                 <Link href="/project-details">{item.desc} <i className="fas fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Project
