import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamArea from "./TeamArea"
import Counter from "@/components/homes/home-three/Counter"
import SkillArea from "../about/SkillArea"
import FooterOne from "@/layouts/footers/FooterOne"
import Brand from "@/components/homes/home-three/Brand"
import CtaArea from "@/components/common/CtaArea"

const Team = () => {
   return (
      <>
         <HeaderOne />
         <Breadcrumb title="Team" sub_title="Team" />
         <TeamArea />
         <Counter />
         <SkillArea style={true} />
         <Brand/>
         <CtaArea/>
         <FooterOne/>
      </>
   )
}

export default Team
