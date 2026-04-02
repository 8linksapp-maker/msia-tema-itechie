import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import footer_data from "@/data/FooterData";
import rc_blog_data from "@/data/RcBlogData";

import footerLogo from "@/assets/img/logo-3.webp";
import footerGallery_1 from "@/assets/img/gallery/1.webp";
import footerGallery_2 from "@/assets/img/gallery/2.webp";
import footerGallery_3 from "@/assets/img/gallery/3.webp";
import footerGallery_4 from "@/assets/img/gallery/4.webp";
import footerGallery_5 from "@/assets/img/gallery/5.webp";
import footerGallery_6 from "@/assets/img/gallery/6.webp";

const gallery_data: StaticImageData[] = [footerGallery_1, footerGallery_2, footerGallery_3, footerGallery_4, footerGallery_5, footerGallery_6,];

const FooterTwo = () => {
   return (
      <footer className="footer-area bg-cover bg-base footer-area-3">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_about">
                     <h4 className="widget-title">
                        <Link href="#"><Image src={footerLogo} alt="img" /></Link>
                     </h4>
                     <div className="details">
                        <p>Wimply dummy text of the priatypesetting industry orem Ipsum has been thindustry standard dummy text ever since</p>
                     </div>
                  </div>
               </div>
               {footer_data.slice(0, 1).map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="widget widget_nav_menu">
                        <h4 className="widget-title">{item.title}</h4>
                        <ul>
                           {item.nav_links.map((menu, i) => (
                              <li key={i}><Link href={menu.link}>{menu.title}</Link></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}

               <div className="col-lg-3 col-md-6">
                  <div className="widget widget-recent-post">
                     <h4 className="widget-title">Recent News</h4>
                     <ul>
                        {rc_blog_data.slice(0, 2).map((item) => (
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

               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_subscribe">
                     <h4 className="widget-title">Our Gallery</h4>
                     <ul className="footer-gallery-img">
                        {gallery_data.map((gallery, index) => (
                           <li key={index}><Image src={gallery} alt="img" /></li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer-bottom text-center">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 align-self-center">
                     <p>© 2025. All Rights Reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
