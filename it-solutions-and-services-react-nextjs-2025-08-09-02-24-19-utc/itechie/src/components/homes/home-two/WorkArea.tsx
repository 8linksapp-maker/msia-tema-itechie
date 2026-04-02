import Image from 'next/image'
import work_data from '@/data/WorkData'

import workShape from '@/assets/img/shape/1.webp'

const WorkArea = () => {
   return (
      <div className="how-it-work-area pd-top-100 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-10">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-border">Work Process</h5>
                     <h2 className="title">How to work it</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
               </div>
            </div>

            <div className="how-it-work-inner">
               <Image className="hills-line" src={workShape} alt="img" />
               <div className="row">
                  {work_data.filter((items) => items.page === "home_2").map((item) => (
                     <div key={item.id} className="col-lg-3 col-md-6">
                        <div className="single-work-inner style-three text-center">
                           <div className="count-inner">
                              <i className={item.icon}></i>
                           </div>
                           <div className="details-wrap">
                              <div className="details-inner">
                                 <h4>{item.title}</h4>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default WorkArea
