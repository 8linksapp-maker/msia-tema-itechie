import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"

const Blog = () => {
   return (
      <div className="blog-area pd-top-115 pd-bottom-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">blog Post</h5>
                     <h2 className="title">Read Our Latest Tips &Tricks</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue
                        atpellentesque laoreet</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {blog_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-blog-inner style-3">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                           <ul className="blog-meta">
                              <li><i className="far fa-user"></i> By Admin</li>
                              <li><i className="far fa-calendar-alt me-2"></i>{item.date}</li>
                           </ul>
                        </div>
                        <div className="details">
                           <h4><Link href="/blog-details">{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <Link className="read-more-btn" href="/blog-details"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Blog
