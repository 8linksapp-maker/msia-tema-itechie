import Service from "./Service";
import About from "./About";
import Team from "./Team";
import FAQ from "../home-one/FAQ";
import PricingPlan from "./PricingPlan";
import Counter from "./Counter";
import WorkArea from "./WorkArea";
import Banner from "./Banner";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Brand from "./Brand";
import Project from "./Project";
import FooterOne from "@/layouts/footers/FooterOne";
import Blog from "./Blog";
import SkillArea from "./SkillArea";
import Testimonial from "./Testimonial";

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <Banner />
         <Brand />
         <Service />
         <About />
         <Project />
         <Team style={false} />
         <FAQ />
         <PricingPlan />
         <Counter />
         <WorkArea />
         <Testimonial/>
         <SkillArea/>
         <Blog />
         <FooterOne />
      </>
   )
}

export default HomeThree;
