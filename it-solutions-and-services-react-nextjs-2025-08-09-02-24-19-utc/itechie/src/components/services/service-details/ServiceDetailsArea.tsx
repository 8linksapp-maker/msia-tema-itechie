import Image from "next/image";
import Link from "next/link";
import CommonFaq from "@/components/common/CommonFaq";

import serviceDetailsThumb_1 from "@/assets/img/service/service-single.webp";
import serviceDetailsThumb_2 from "@/assets/img/service/01.webp";

interface ContentType {
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   service_list: {
      id: number;
      icon: string;
      title: string;
      desc: string;
   }[];
   widget_list: {
      class_name: string;
      title: string;
      list: string[];
   }[];
}

const service_content: ContentType = {
   desc_1: (<>Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget elementum acondimentum eget, diam. Nam at tortor in tellus interdum sagitliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet.</>),
   desc_2: (<>Lorem available market standard dummy text available market industry Lorem Ipsum simply dummy text of free available market.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</>),
   service_list: [
      {
         id: 1,
         icon: "icomoon-gear",
         title: "Flexible Solutions",
         desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
      },
      {
         id: 2,
         icon: "icomoon-time",
         title: "24/7 Unlimited Support",
         desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
      },
      {
         id: 3,
         icon: "icomoon-team",
         title: "Flexible Solutions",
         desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
      },
      {
         id: 4,
         icon: "icomoon-profile",
         title: "24/7 Unlimited Support",
         desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
      },
   ],
   widget_list: [
      {
         class_name: "widget_catagory",
         title: "Catagory",
         list: ["Digital marketing", "Machine learning", "It management", "Loan & Insurance", "Web Design", "Digital Marketing", "IT Consultancy",]
      },
      {
         class_name: "widget_archive",
         title: "Achivment",
         list: ["Digital marketing", "Machine learning", "It management", "Loan & Insurance", "Web Design", "Digital Marketing", "IT Consultancy",]
      },
   ]
}

const { desc_1, desc_2, service_list, widget_list } = service_content;

const ServiceDetailsArea = () => {
   return (
      <div className="project-area pd-top-120 mb-4">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="blog-details-page-content">
                     <div className="single-blog-inner">
                        <div className="thumb">
                           <Image src={serviceDetailsThumb_1} alt="img" />
                        </div>
                        <div className="details">
                           <h2>It management</h2>
                           {desc_1}
                           {desc_2}
                           <h4 className="pt-4 mb-4">Key benefits</h4>
                           
                           <div className="row">
                              <div className="col-md-6">
                                 {service_list.slice(0, 2).map((item) => (
                                    <div key={item.id} className="media single-choose-inner">
                                       <div className="media-left">
                                          <div className="icon">
                                             <i className={item.icon}></i>
                                          </div>
                                       </div>
                                       <div className="media-body">
                                          <h4>{item.title}</h4>
                                          <p>{item.desc}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                              <div className="col-md-6">
                                 {service_list.slice(2, 4).map((item) => (
                                    <div key={item.id} className="media single-choose-inner">
                                       <div className="media-left">
                                          <div className="icon">
                                             <i className={item.icon}></i>
                                          </div>
                                       </div>
                                       <div className="media-body">
                                          <h4>{item.title}</h4>
                                          <p>{item.desc}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                           
                           <h4>More information</h4>

                           <div className="row">
                              <div className="col-md-8">
                                 <div className="accordion mt-2" id="accordionExample">
                                    <CommonFaq style={true} />
                                 </div>
                              </div>
                              <div className="col-md-4 align-self-center mt-4 mt-lg-0">
                                 <div className="thumb image-hover-animate border-radius-5">
                                    <Image src={serviceDetailsThumb_2} alt="img" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-4 col-12">
                  <div className="td-service-sidebar">
                     {widget_list.map((item, index) => (
                        <div key={index} className={`widget ${item.class_name}`}>
                           <h4 className="widget-title">{item.title}</h4>
                           <ul className="catagory-items">
                              {item.list.map((list, i) => (
                                 <li key={i}><Link href="/blog">{list}</Link></li>
                              ))}
                           </ul>
                        </div>
                     ))}

                     <div className="widget widget_catagory">
                        <h4 className="widget-title">Download</h4>
                        <ul className="catagory-items">
                           <li><Link href="PDFLINK" download>Download PDF</Link></li>
                           <li><Link href="PDFLINK" download>Download DOC</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceDetailsArea
