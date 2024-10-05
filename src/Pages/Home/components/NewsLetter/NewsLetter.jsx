import React from "react";
import Button from "#/Components/Button/Button";
import { useForm } from "react-hook-form";

// Assets
import Verified from "@/assets/Icons/verified.png";

function NewsLetter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div className="flex h-full w-screen max-w-[1440px] items-center justify-center bg-primary py-20">
      <div className="NEWSLETTER flex w-full max-w-[1280px] flex-col items-center justify-center gap-10 px-5 font-bold leading-tight text-accent">
        <h1 className="TITLE max-w-[666px] text-balance text-clamp-title">
          Do You Have Any Questions? Get Help From Us
        </h1>
        <div className="TEXTS md:flex-row flex-col flex items-start md:items-center gap-3 justify-between md:gap-10">
          <span className="flex items-center justify-center gap-1">
            <img src={Verified} alt="icon" />
            <p>Chat live with our support team</p>
          </span>
          <span className="flex items-center justify-center gap-1">
            <img src={Verified} alt="icon" />
            <p>Browse our FAQ</p>
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full md:flex-row flex-col items-center justify-center gap-2"
        >
          <input
            {...register("EMAIL", {
              required: "Email is required for the subscription",
            })}
            type="email"
            placeholder="Enter your email address..."
            className="h-[58px] w-full max-w-[505px] rounded-[8px] bg-card px-5 shadow-lg outline-none placeholder:text-accent"
          />
          <span>{errors?.EMAIL?.message}</span>
          <Button
            type="submit"
            text="Submit"
            maxWidth={"md:max-w-[156px]"}
            height={"h-[56px]"}
          />
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
