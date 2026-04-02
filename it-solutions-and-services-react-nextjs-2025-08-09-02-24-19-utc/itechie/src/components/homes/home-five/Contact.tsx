import Image from "next/image"
import HomeContact from "@/components/forms/HomeContact"

import contactImg from "@/assets/img/about/h5-3.webp"

const Contact = () => {
   return (
      <div className="contact-form-area bg-gray pd-top-120">
      <div className="container">
         <div className="row">
            <div className="col-lg-6">
               <HomeContact/>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
               <Image src={contactImg} alt="img"/>
            </div>
         </div>
      </div>
   </div>
   )
}

export default Contact
