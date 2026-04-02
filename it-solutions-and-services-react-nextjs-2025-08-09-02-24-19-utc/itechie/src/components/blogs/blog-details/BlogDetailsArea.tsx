import BlogFrom from "@/components/forms/BlogFrom";
import BlogSidebar from "../blog/BlogSidebar";
import BlogDetailsComment from "./BlogDetailsComment";
import Link from "next/link";
import Image from "next/image";

import blogDetailsthumb_1 from "@/assets/img/blog/1.webp"
import blogDetailsthumb_2 from "@/assets/img/blog/09.webp"

interface ContentType {
   title: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   desc_4: JSX.Element;
   desc_5: JSX.Element;
   blockquote: string;
   list: string[];
   icon: string[];
}

const blog_details_content: ContentType = {
   title: "Pellentesque habita morbi tristique",
   desc_1: (<>Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget elementum acondimentum eget, diam. Nam at tortor in tellus interdum sagitliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet.</>),
   desc_2: (<>Lorem available market standard dummy text available market industry Lorem Ipsum simply dummy text of free available market.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</>),
   desc_3: (<>Mauris turpis nunc, blandit et vat molestie pligula.aretra convallis urna. Quisque ut nisi.</>),
   desc_4: (<>Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</>),
   desc_5: (<>Lorem available market standard dummy text available market industry Lorem Ipsum simply dummy text of free available market.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</>),
   blockquote: "sollicitudin nisi nulla eget augue. Maecenas quis turpaliquet, portorem et, dictum purus. Cdimentfermentposuere world class service provider",
   list: ["Lorem available market", "injected humour words which", "Available market",],
   icon: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram", "fab fa-linkedin"],
}

const { title, desc_1, desc_2, desc_3, desc_4, desc_5, blockquote, list, icon } = blog_details_content;

const BlogDetailsArea = ({single_blog}:any) => {
   return (
      <div className="blog-area pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="blog-details-page-content">
                     <div className="single-blog-inner">
                        <div className="thumb">
                           <Image src={blogDetailsthumb_1} alt="img" />
                        </div>
                        <div className="details">
                           <ul className="blog-meta">
                              <li><i className="far fa-user"></i> By Admin</li>
                              <li><i className="far fa-calendar-alt"></i> 25 May 2021</li>
                              <li><i className="far fa-comment-dots"></i> 22 Comment</li>
                              <li><i className="far fa-folder-open"></i> It Solution</li>
                           </ul>
                           {desc_1}
                           {desc_2}
                           <blockquote>
                              <i className="fas fa-quote-right"></i>
                              <p>{blockquote}</p>
                           </blockquote>
                           <div className="row">
                              <div className="col-lg-6">
                                 <div className="thumb">
                                    <Image src={blogDetailsthumb_2} alt="img" />
                                 </div>
                              </div>
                              <div className="col-lg-6 align-self-center mt-4 mt-lg-0">
                                 <h5>{title}</h5>
                                 <p>{desc_3}</p>
                                 <ul className="single-list-inner style-check mb-3">
                                    {list.map((list, index) => (
                                       <li key={index}><i className="fas fa-check"></i>{list}</li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                           <p>{desc_4}</p>
                           <p>{desc_5}</p>

                           <div className="tag-and-share">
                              <div className="row">
                                 <div className="col-sm-7">
                                    <div className="tags d-inline-block">
                                       <strong>Tag : </strong>
                                       <Link className="me-2" href="#">Agency</Link>
                                       <Link href="#">Marketing</Link>
                                    </div>
                                 </div>
                                 <div className="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                                    <div className="blog-share">
                                       <ul>
                                          {icon.map((icon, i) => (
                                             <li key={i}><Link href="#"><i className={icon} aria-hidden="true"></i></Link></li>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="prev-next-post">
                              <div className="row">
                                 <div className="col-6">
                                    <Link className="it-btn btn-border-black" href="#"><i className="la la-arrow-left float-left"></i> Prev post</Link>
                                 </div>
                                 <div className="col-6 text-end">
                                    <Link className="it-btn btn-border-black" href="#">Next post <i className="la la-arrow-right"></i></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <BlogDetailsComment />
                     <BlogFrom />
                  </div>
               </div>
               <div className="col-lg-4 col-12">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogDetailsArea
