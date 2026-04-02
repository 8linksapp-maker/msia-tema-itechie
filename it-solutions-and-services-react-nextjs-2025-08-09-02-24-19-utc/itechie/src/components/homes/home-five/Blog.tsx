import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"

const Blog = () => {
   return (
      <div className="blog-area pd-top-110 pd-bottom-90">
         <div className="container">
            <div className="section-title">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8">
                     <h2 className="title">Our Latest News</h2>
                     <p className="content">AI technology is perfect for best business solutions & we offer help to achieve your goals.</p>
                  </div>
                  <div className="col-lg-6 col-md-4 align-self-center mt-4 mt-md-0">
                     <div className="btn-wrap text-md-end">
                        <Link className="it-btn btn-base" href="/team">Discover More</Link>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {blog_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-blog-inner style-5">
                        <div className="thumb">
                           <Image src={item.img} alt="img" />
                        </div>
                        <div className="details">
                           <ul className="blog-meta">
                              <li>By Admin</li>
                              <li>{item.date}</li>
                           </ul>
                           <h4><Link href="/blog-details">{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <Link className="read-more-text" href="/blog-details">Read More <span></span></Link>
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
