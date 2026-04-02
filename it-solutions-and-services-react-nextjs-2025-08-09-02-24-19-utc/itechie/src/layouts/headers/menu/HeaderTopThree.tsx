import Link from "next/link"

const HeaderTopThree = () => {
   return (
      <div className="navbar-top style-3">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8 align-self-center">
                  <ul className="topbar-right text-md-start text-center">
                     <li><p><i className="far fa-clock"></i> Opening Hour  9:00am - 10:00pm</p></li>
                     <li><p><i className="far fa-envelope"></i> exam@gmail.com</p></li>
                  </ul>
               </div>
               <div className="col-lg-6 col-md-4 d-none d-md-block">
                  <ul className="topbar-right text-md-end text-center d-flex align-items-center justify-content-center">
                     <li className="d-none d-lg-inline-block"><p>Hot Line: <span>(+00)-333-444-5555</span></p></li>
                     <li>
                        <Link className="it-btn btn-base" href="#">Get Started</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopThree
