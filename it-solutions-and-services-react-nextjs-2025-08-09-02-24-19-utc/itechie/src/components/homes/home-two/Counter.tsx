import Count from "@/components/common/Count";
import counter_data from "@/data/CounterData";

const Counter = () => {
   return (
      <div className="counter-area bg-base pt-5 pb-3">
         <div className="container">
            <div className="row">
               {counter_data.filter((items) => items.page === "home_2").map((item, i) => (
                  <div key={i} className="col-md-3">
                     <div className="single-exp-inner style-white">
                        <h2><span className="counter"><Count number={item.count} /></span> <sub>{item.counter_text}</sub></h2>
                        <h5>{item.title}</h5>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Counter
