import Image from "next/image";

import projectDetailsThumb from "@/assets/img/project/project-single.webp";

interface ContentType {
   title: string;
   desc_1: JSX.Element;
   project_list: {
      title: string;
      desc: JSX.Element;
      list: string[];
      class_name?: string;
   }[];
   sidebar: {
      title: string;
      desc: string;
   }[];
}

const project_details_content: ContentType = {
   title: "Project desception",
   desc_1: (<>Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eementum acondimentum eget, diam. Nam at tortor in tellus interdum sagitliquam lobortis. Donec orci lectus, aliquam ut, faucibus smod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet</>),
   project_list: [
      {
         title: "Challenges During The Project Time",
         desc: (<>Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique ctus et nalesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et tempor auctor sto. In ac felis quis rtor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum,rta a auctor quis, euismo morbi tristique senectus</>),
         list: ["Lorem available market", "injected humour words which", "Available market", "Lorem available market", "injected humour words which", "Available market"]
      },
      {
         class_name: "mt-3 mb-4",
         title: "Challenges During The Project Time",
         desc: (<>Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique ctus et nalesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et tempor auctor sto. In ac felis quis rtor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum,rta a auctor quis, euismo morbi tristique senectus</>),
         list: ["Lorem available market", "injected humour words which", "Available market", "Lorem available market", "injected humour words which", "Available market"]
      },
   ],
   sidebar: [{ title: "Project", desc: "It Solution Service" }, { title: "Client", desc: "Tecom Company" }, { title: "Year", desc: "May 2023 - Jun 2021" }, { title: "Price Value", desc: "$2,5000" }]
}

const { title, desc_1, project_list, sidebar } = project_details_content;

const ProjectDetailsArea = () => {
   return (
      <div className="blog-area pd-top-120 mb-4">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-12 order-lg-last">
                  <div className="project-sitebar mb-4 mb-lg-0">
                     <div className="widget-project-info">
                        <ul>
                           {sidebar.map((list, i) => (
                              <li key={i}>
                                 <h6>{list.title}</h6>
                                 <p>{list.desc}</p>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-8 order-lg-first">
                  <div className="blog-details-page-content">
                     <div className="single-blog-inner">
                        <div className="thumb">
                           <Image src={projectDetailsThumb} alt="img" />
                        </div>
                        <div className="details">
                           <h2>{title}</h2>
                           <p>{desc_1}</p>
                           {project_list.map((item, index) => (
                              <div key={index} className={`bg-sky p-4 ${item.class_name}`}>
                                 <h4 className="mb-4">{item.title}</h4>
                                 <p>{item.desc}</p>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <ul className="single-list-inner style-check mb-3">
                                          {item.list.slice(0, 3).map((list, i) => (
                                             <li key={i}><i className="fas fa-check"></i>{list}</li>
                                          ))}
                                       </ul>
                                    </div>
                                    <div className="col-md-6">
                                       <ul className="single-list-inner style-check mb-3">
                                          {item.list.slice(3, 6).map((list, i) => (
                                             <li key={i}><i className="fas fa-check"></i>{list}</li>
                                          ))}                                    </ul>
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
      </div>
   )
}

export default ProjectDetailsArea
