import Link from "next/link"

const HeaderTopOne = () => {
   return (
      <div className="navbar-top">
         <div className="container">
            <div className="row">
               <div className="col-sm-6">
                  <ul className="topbar-right text-md-start text-center">
                     <li className="d-none d-none d-lg-inline-block">
                        <p><i className="far fa-clock"></i> Opening Hour 9:00am - 10:00pm</p>
                     </li>
                     <li>
                        <p><i className="far fa-envelope"></i> exam@gmail.com</p>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6">
                  <ul className="topbar-right text-md-end text-center">
                     <li className="d-none d-none d-lg-inline-block">
                        <p>Hot Line: <span>(+00)-333-444-5555</span></p>
                     </li>
                     <li className="social-area">
                        <p className="d-inline-block">Follow Us On:</p>
                        <Link href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fab fa-pinterest" aria-hidden="true"></i></Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopOne;
