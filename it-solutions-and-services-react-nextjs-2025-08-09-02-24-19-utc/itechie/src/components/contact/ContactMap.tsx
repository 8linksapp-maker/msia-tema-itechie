import ContactForm from "../forms/ContactForm"

const ContactMap = () => {
   return (
      <>
         <div className="g-map-inner">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.929175165831!2d90.36542960000001!3d23.774741049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639502123533!5m2!1sen!2sbd"></iframe>
         </div>
         <div className="g-map-contact">
            <div className="row justify-content-end">
               <div className="col-lg-5 col-md-7">
                  <ContactForm />
               </div>
            </div>
         </div>
      </>
   )
}

export default ContactMap
