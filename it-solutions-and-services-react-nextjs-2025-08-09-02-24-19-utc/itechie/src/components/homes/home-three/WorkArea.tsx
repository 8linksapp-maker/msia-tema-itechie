import work_data from "@/data/WorkData"

const WorkArea = () => {
   return (
      <div className="how-it-work-area pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Work Process</h5>
                     <h2 className="title">How to work it</h2>
                     <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                  </div>
               </div>
            </div>
            
            <div className="how-it-work-inner arrow-line">
               <div className="row">
                  {work_data.filter((items) => items.page === "home_1").map((item) => (
                     <div key={item.id} className="col-lg-3 col-md-6">
                        <div className="single-work-inner style-four text-center">
                           <div className="count-wrap pb-2">
                              <div className="count-inner">
                                 <h2>{item.count}</h2>
                              </div>
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
