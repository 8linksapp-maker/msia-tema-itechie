"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   message: string;
   web: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
      web: yup.string().required().label("Website"),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Comment sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form className="contact-form-wrap" onSubmit={handleSubmit(onSubmit)} id="contact-form">
         <div className="consulting-contact-form mx-4">
            <h3 className="mb-3">Free consulting </h3>
            <div className="single-input-inner style-bg">
               <input type="text" {...register("name")} placeholder="Full Name" />
               <p className="form_error">{errors.name?.message}</p>
            </div>
            <div className="single-input-inner style-bg">
               <input type="text" {...register("email")} placeholder="Email Address" />
               <p className="form_error">{errors.email?.message}</p>
            </div>
            <div className="single-input-inner style-bg">
               <textarea {...register("message")} placeholder="Message"></textarea>
               <p className="form_error">{errors.message?.message}</p>
            </div>
            <div className="btn-wrap pb-3">
               <button type="submit" className="it-btn btn-base">Submit Now </button>
            </div>
            <p className="form-messege mb-0 mt-20 text-center"></p>
         </div>
      </form>
   )
}

export default ContactForm
