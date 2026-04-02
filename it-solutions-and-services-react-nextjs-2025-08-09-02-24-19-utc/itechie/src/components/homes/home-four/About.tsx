import Image from "next/image"
import Link from "next/link"

import aboutImg_1 from "@/assets/img/about/h4-1.webp";
import aboutImg_2 from "@/assets/img/about/01.webp";

const About = () => {
   return (
      <div className="about-area pd-bottom-70 px-lg-0 px-md-5 px-4">
         <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-9">
               <div className="thumb">
                  <Image src={aboutImg_1} alt="img" />
               </div>
            </div>
            <div className="col-xl-5 col-lg-6 align-self-center">
               <div className="section-title px-lg-5 mb-0">
                  <h2 className="title mb-4">
                     <Image src={aboutImg_2} alt="img" />
                     Your Partner for Software <br /> Innovation
                  </h2>
                  <p className="content mb-lg-5">Machine learning and artificial intelligence provide <br /> business solution and delivered blazing fast, striking <br /> result. quis ante. Etiam sit amet orci.</p>
                  <p className="mb-0 bottom-line-url">Want to learn more about us? <Link href="/contact">Click here</Link></p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
