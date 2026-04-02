import blog_data from "@/data/BlogData"
import rc_blog_data from "@/data/RcBlogData"
import Image from "next/image"
import Link from "next/link"

const Blog = () => {
   return (
      <div className="blog-area pd-bottom-60">
         <div className="container">
            <div className="section-title">
               <div className="row">
                  <div className="col-lg-7">
                     <h5 className="sub-title left-border">Our Blog</h5>
                     <h2 className="title">Read Our Latest Tips &Tricks</h2>
                     <p className="content mt-2">Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed consequat</p>
                  </div>
                  <div className="col-lg-5 align-self-center">
                     <div className="btn-wrap text-lg-end mt-4 mt-lg-0">
                        <Link className="it-btn btn-base" href="/blog">Discover More Blog</Link>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               {blog_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-blog-inner style-4">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                           <div className="date">
                              {item.date} <br /> <span>May</span>
                           </div>
                        </div>
                        <div className="details">
                           <h4><Link href="/blog-details">{item.title}</Link></h4>
                           <p>{item.desc}</p>
                        </div>
                        <div className="bottom">
                           <div className="row">
                              <div className="col-8">
                                 <ul className="blog-meta mb-0">
                                    <li>Post by admin</li>
                                    <li>{item.comment} Comment</li>
                                 </ul>
                              </div>
                              <div className="col-4 text-end">
                                 <div className="share-area-wrap">
                                    <div className="share-wrap">
                                       <i className="fa fa-share-alt"></i>
                                    </div>
                                    <div className="share-hover-icons">
                                       <ul>
                                          <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                          <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                          <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}

               <div className="col-lg-4 col-md-6">
                  <div className="widget widget-recent-post pe-lg-5">
                     <ul>
                        {rc_blog_data.map((item) => (
                           <li key={item.id}>
                              <div className="media">
                                 <div className="media-left">
                                    <Image src={item.img} alt="blog" />
                                 </div>
                                 <div className="media-body align-self-center">
                                    <h6 className="title"><Link href="/blog-details">{item.title}</Link></h6>
                                    <div className="post-info"><i className="far fa-calendar-alt"></i><span>{item.date}</span></div>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Blog
