import Banner from "./Banner"
import IntroArea from "./IntroArea"
import About from "./About"
import PricingPlan from "./PricingPlan"
import Team from "./Team"
import Testimonial from "./Testimonial"
import SupportTwo from "./SupportTwo"
import Blog from "./Blog"
import Subscribe from "./Subscribe"
import FooterTwo from "@/layouts/footers/FooterTwo"
import SupportOne from "./SupportOne"
import HeaderFour from "@/layouts/headers/HeaderFour"

const HomeFour = () => {
   return (
      <main className="home-help-desk">
         <HeaderFour />
         <Banner />
         <IntroArea />
         <About />
         <SupportOne />
         <PricingPlan />
         <Team />
         <Testimonial />
         <SupportTwo />
         <Blog />
         <Subscribe />
         <FooterTwo />
      </main>
   )
}

export default HomeFour
