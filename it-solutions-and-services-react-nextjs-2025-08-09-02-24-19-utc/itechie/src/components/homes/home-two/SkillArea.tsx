import Skillbar from '@/components/common/Skillbar';
import Image from 'next/image';

import SkillImg_1 from '@/assets/img/other/4.webp';
import SkillImg_2 from '@/assets/img/other/5.webp';
import SkillImg_3 from '@/assets/img/other/6.webp';

const SkillArea = () => {
   return (
      <div className="skill-area bg-relative pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 pe-5 mb-5 mb-lg-0">
                  <div className="section-title mb-0">
                     <h5 className="sub-title left-border">Professional Skill </h5>
                     <h2 className="title">Bringing new it business solutions and ideas </h2>
                     <p className="content">Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque</p>
                  </div>
                  <div className="skill-progress-area mt-4">
                     <Skillbar />
                  </div>
               </div>

               <div className="col-lg-6 px-xl-5">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="thumb border-radius-5 mb-4 image-hover-animate">
                           <Image src={SkillImg_1} alt="img" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="thumb border-radius-5 image-hover-animate mb-3 mb-md-0">
                           <Image src={SkillImg_2} alt="img" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="thumb border-radius-5 image-hover-animate">
                           <Image src={SkillImg_3} alt="img" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SkillArea
