import Count from "@/components/common/Count"
import counter_data from "@/data/CounterData"
import Image from "next/image"

const FactArea = () => {
   return (
      <div className="fact-area pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {counter_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-fact-wrap-5">
                        <div className="thumb">
                           <Image src={item.count_bg ? item.count_bg : ""} alt="img" />
                           <h2><span className="counter"><Count number={item.count} /></span>{item.counter_text}</h2>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default FactArea
