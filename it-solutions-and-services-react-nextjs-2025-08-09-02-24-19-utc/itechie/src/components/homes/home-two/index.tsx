import Banner from "./Banner"
import IntroArea from "./IntroArea"
import About from "./About"
import Service from "./Service"
import SkillArea from "./SkillArea"
import Project from "./Project"
import FAQ from "./FAQ"
import Counter from "./Counter"
import PricingPlan from "./PricingPlan"
import VideoArea from "./VideoArea"
import WorkArea from "./WorkArea"
import Team from "./Team"
import Blog from "./Blog"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import Brand from "./Brand"
import FooterOne from "@/layouts/footers/FooterOne"
import Testimonial from "./Testimonial"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <Banner />
         <IntroArea />
         <About />
         <Service />
         <SkillArea />
         <Project />
         <FAQ />
         <Counter />
         <PricingPlan />
         <VideoArea />
         <Testimonial />
         <WorkArea />
         <Team />
         <Blog />
         <Brand />
         <FooterOne />
      </>
   )
}

export default HomeTwo
