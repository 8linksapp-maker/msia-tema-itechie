import Banner from "./Banner"
import Brand from "./Brand"
import IntroArea from "./IntroArea"
import FactArea from "./FactArea"
import Service from "./Service"
import AboutTwo from "./AboutTwo"
import Team from "./Team"
import PricingPlan from "./PricingPlan"
import Blog from "./Blog"
import Contact from "./Contact"
import Footerthree from "@/layouts/footers/Footerthree"
import AboutOne from "./AboutOne"
import Testimonial from "./Testimonial"
import HeaderFive from "@/layouts/headers/HeaderFive"

const HomeFive = () => {
   return (
      <main className="home-cyber">
         <HeaderFive />
         <Banner />
         <Brand />
         <IntroArea />
         <AboutOne/>
         <FactArea />
         <Service />
         <AboutTwo/>
         <Team/>
         <PricingPlan/>
         <Testimonial/>
         <Blog/>
         <Contact/>
         <Footerthree/>
      </main>
   )
}

export default HomeFive
