import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/img/about/01.webp"

const Blog = () => {
   return (
      <div className="blog-area pd-top-110">
         <div className="container">
            <div className="section-title text-center">
               <div className="row justify-content-center">
                  <div className="col-lg-7">
                     <h2 className="title">
                        Solo, Agency or Team? We’ve got you
                        <span>
                           Covered
                           <Image src={titleShape} alt="img" />
                        </span>
                     </h2>
                     <p className="content mt-2">Machine learning and artificial intelligence provide business solution and delivered mauris siamet nibh. odales sagittis magna. Sed</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {blog_data.filter((items) => items.page === "home_4").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-blog-inner style-4">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                        </div>
                        <div className="details">
                           <div className="date">{item.date}</div>
                           <h4><Link href="/blog-details">{item.title}</Link></h4>
                           <Link className="read-more-text" href="/blog-details"><span>Read More</span></Link>
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
