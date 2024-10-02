import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    reset();
    navigate("/");
  };

  const inputs = [
    { name: "firstName", label: "Firstname", type: "text" },
    { name: "lastName", label: "Lastname", type: "text" },
    { name: "email", label: "Email", type: "email" },
  ];

  return (
    <div className="relative flex h-full w-screen max-w-[1440px] items-center justify-center bg-primary py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="SIGN__UP w-full max-w-[640px] space-y-3 px-5 font-bold leading-tight text-accent"
      >
        {inputs?.map((input) => {
          return (
            <div className="INPUT flex w-full flex-col items-start justify-center gap-2">
              <label>{input.label}</label>
              <input
                className={`w-full rounded-[8px] bg-card px-2 py-3 outline-none ${errors[input?.name] ? "outline-4 outline-red-500" : ""}`}
                type={input.type}
                name={input.name}
                {...register(input?.name, {
                  required: `${input?.name} is required for signing up...`,
                })}
              />
            </div>
          );
        })}
        <Button text={"Sign up"} type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
