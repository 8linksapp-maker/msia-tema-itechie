import intro_data from "@/data/IntroData"

const IntroArea = () => {
   return (
      <div className="intro-area mg-top--100 bg-relative">
         <div className="container">
            <div className="row justify-content-center">
               {intro_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-intro-inner">
                        <div className="thumb media">
                           <div className="media-left">
                              <i className={item.icon}></i>
                           </div>
                           <div className="media-body align-self-center">
                              <h4>{item.title}</h4>
                           </div>
                        </div>
                        <div className="details">
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default IntroArea
