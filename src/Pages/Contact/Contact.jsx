import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import FormAlert from "#/Components/FormAlert/FormAlert.jsx"


// Assets
import discord from "@/assets/Icons/Contact/discord.png";
import email from "@/assets/Icons/Contact/email.png";
import instagram from "@/assets/Icons/Contact/instagram.png";
import location from "@/assets/Icons/Contact/location.png";
import phone from "@/assets/Icons/Contact/phone.png";
import twitter from "@/assets/Icons/Contact/twitter.png";
import Button from "../../Components/Button/Button";

function Contact() {
  const [formValues, setFormValues] = useState(null);
  const [alertToggle, setAlertToggle] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (formValues) {
      console.log(formValues);
    }
  }, [formValues]);

  const onSubmit = (values) => {
    setFormValues(values);
    setAlertToggle(true);
    reset()
  };

  const handleCloseAlert = () => {
    setAlertToggle(false);
  };

  return (
    <div className="relative flex h-full w-screen max-w-[1440px] items-center justify-center bg-primary py-20">
      <div className="CONTACT text-accen grid w-full max-w-[1280px] grid-cols-1 gap-10 px-5 font-bold leading-tight text-accent md:h-[667px] md:grid-cols-5">
        <div className="CONTACT__INFORMATION flex flex-col items-start justify-between gap-10 rounded-[8px] bg-card p-5 text-start shadow-lg md:col-span-2 md:gap-0">
          <div className="TEXT space-y-2">
            <h1 className="CONTACT__TITLE text-4xl">Contact Information</h1>
            <p className="CONTACT__SUBTITLE text-xl">
              Say something to start a live chat!
            </p>
          </div>
          <div className="DETAILS space-y-10">
            <div className="NUMBER flex items-center justify-start gap-2">
              <div className="IMG__WRAPPER inline-block rounded-full bg-accent p-2">
                <img className="size-5" src={phone} alt="phone" />
              </div>
              <span>+1012 3456 789</span>
            </div>
            <div className="EMAIL flex items-center justify-start gap-2">
              <div className="IMG__WRAPPER inline-block rounded-full bg-accent p-2">
                <img className="size-5" src={email} alt="email" />
              </div>
              <span>demo@gmail.com</span>
            </div>
            <div className="ADDRESS flex items-center justify-start gap-2">
              <div className="IMG__WRAPPER inline-block rounded-full bg-accent p-2">
                <img className="size-5" src={location} alt="address" />
              </div>
              <div>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </div>
            </div>
          </div>
          <div className="SOCIALS flex items-center justify-start gap-10">
            <img
              className="size-12 md:size-10"
              src={instagram}
              alt="instagram"
            />
            <img className="size-12 md:size-10" src={twitter} alt="twitter" />
            <img className="size-12 md:size-10" src={discord} alt="discord" />
          </div>
        </div>
        <div className="CONTACT__FORM flex items-center justify-center rounded-[8px] bg-secondary p-5 shadow-lg md:col-start-3 md:col-end-6">
          <form
            className="grid w-full grid-cols-1 place-items-start gap-5 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="FIRST__NAME flex w-full flex-col items-start justify-center">
              <label>First Name</label>
              <input
                className="w-full border-b-2 border-accent bg-transparent px-2 py-3 outline-none"
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              <span className="text-red-500">{errors?.firstName?.message}</span>
            </div>
            <div className="LAST__NAME flex w-full flex-col items-start justify-center">
              <label>Last Name</label>
              <input
                className="w-full border-b-2 border-accent bg-transparent px-2 py-3 outline-none"
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
              />
              <span className="text-red-500">{errors?.lastName?.message}</span>
            </div>
            <div className="EMAIL flex w-full flex-col items-start justify-center">
              <label>Email</label>
              <input
                className="w-full border-b-2 border-accent bg-transparent px-2 py-3 outline-none"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              <span className="text-red-500">{errors?.email?.message}</span>
            </div>
            <div className="PHONE__NUMBER flex w-full flex-col items-start justify-center">
              <label>Phone Number</label>
              <input
                className="w-full border-b-2 border-accent bg-transparent px-2 py-3 outline-none"
                type="number"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
              />
              <span className="text-red-500">
                {errors?.phoneNumber?.message}
              </span>
            </div>
            <div className="MESSAGE flex w-full flex-col items-start justify-center md:col-span-2">
              <label>Message</label>
              <textarea
                placeholder="Write your message please..."
                className="w-full border-b-2 border-accent bg-transparent px-2 py-3 outline-none"
                type="text"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              <span className="text-red-500">{errors?.message?.message}</span>
            </div>
            <Button type="submit" text={"Send Message"} />
          </form>
        </div>
        {alertToggle && (
          <FormAlert
            onClose={handleCloseAlert}
            FirstName={formValues.firstName}
            LastName={formValues.lastName}
            Email={formValues.email}
            PhoneNumber={formValues.phoneNumber}
            Message={formValues.message}
            setIsOpen={formValues && true}
          />
        )}
      </div>
    </div>
  );
}

export default Contact;
