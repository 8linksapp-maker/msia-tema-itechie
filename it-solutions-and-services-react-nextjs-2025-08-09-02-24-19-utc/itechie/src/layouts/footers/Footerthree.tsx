import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import SocialIcon from "@/components/common/SocialIcon"
import footer_data from "@/data/FooterData"

import footerLogo from "@/assets/img/logo-3.webp"
import footerGallery_1 from "@/assets/img/gallery/7.webp"
import footerGallery_2 from "@/assets/img/gallery/8.webp"
import footerGallery_3 from "@/assets/img/gallery/9.webp"
import footerGallery_4 from "@/assets/img/gallery/10.webp"
import footerGallery_5 from "@/assets/img/gallery/11.webp"
import footerGallery_6 from "@/assets/img/gallery/12.webp"

const gallery_data: StaticImageData[] = [footerGallery_1, footerGallery_2, footerGallery_3, footerGallery_4, footerGallery_5, footerGallery_6,];

const Footerthree = () => {
   return (
      <footer className="footer-area bg-cover bg-black footer-style-4">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_about">
                     <h4 className="logo mb-3">
                        <Image src={footerLogo} alt="img" />
                     </h4>
                     <div className="details">
                        <p>Wimply dummy text of the priatypesetting industry orem Ipsum has been thindustry standard dummy text ever since</p>
                        <ul className="social-media">
                           <SocialIcon />
                        </ul>
                     </div>
                  </div>
               </div>

               {footer_data.map((item) => (
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
                  <div className="widget widget_gallery">
                     <h4 className="widget-title">Gallery</h4>
                     <ul>
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

export default Footerthree
