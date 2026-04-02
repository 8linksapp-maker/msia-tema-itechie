import Image from "next/image"
import ApproachArea from "./ApproachArea";

import aboutThumb_1 from "@/assets/img/home-cyber/tab/2.webp";
import aboutIcon_1 from "@/assets/img/home-cyber/about/icon-1.webp";
import aboutIcon_2 from "@/assets/img/home-cyber/about/icon-2.webp";

const AboutTwo = () => {
   return (
      <div className="about-area pd-top-120 pd-bottom-120">
         <div className="row justify-content-end p-3 p-lg-0">
            <div className="col-lg-6 px-xl-5 order-lg-last text-lg-end">
               <div className="thumb">
                  <Image src={aboutThumb_1} alt="img" />
               </div>
            </div>
            <div className="col-lg-5 align-self-center order-lg-first">
               <div className="section-title">
                  <h2 className="title mb-4">Your Cyber Security Is <br /> In Your Hand Now </h2>
                  <p>AI technology is perfect for best business solutions & we <br /> offer help to achieve your goals.</p>
               </div>
               <div className="single-security-wrap">
                  <div className="thumb">
                     <Image src={aboutIcon_1} alt="img" />
                  </div>
                  <div className="details">
                     <h5>Secure By Design</h5>
                     <p>Secured by Design (SBD) is the official police security initiative that works to improve the security of buildings and their immediate</p>
                  </div>
               </div>
               <div className="single-security-wrap">
                  <div className="thumb">
                     <Image src={aboutIcon_2} alt="img" />
                  </div>
                  <div className="details">
                     <h5>Continuous Monitoring</h5>
                     <p>Continuous monitoring is the process and technology used to detect compliance and risk issues associated with an organization&apos;s financial and operational </p>
                  </div>
               </div>
            </div>
         </div>
         <ApproachArea />
      </div>
   )
}

export default AboutTwo
