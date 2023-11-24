"use client";
import { MailIcon } from "@/components/ui/MailIcon";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInput = {
  username: string;
  password: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const submitform: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <>
      <div className="w-full md:w-1/2 mx-auto px-6 py-4 leading-relaxed  border-1 border-text-gray border-opacity-70">
        <div>
          <h4 className=" text-black dark:text-white-300 font-inter text-xl font-semibold">
            Welcome to DeskTap
          </h4>
          <p className=" text-text-gray dark:text-white-400 dark:font-normal font-inter text-sm">
            Thanks for coming back. Now get into your account by entering your
            username or email and password.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submitform)}
          className="flex flex-col gap-[16px] py-4"
        >
          <div className=" flex flex-col gap-2">
            <label
              htmlFor=""
              className=" text-text-gray dark:text-white-400 dark:font-normal text-sm  font-bold font-inter"
            >
              Username or Email Address
            </label>
            <input
              className=" placeholder:text-sm border-border  border h-[35px] px-3 focus:outline-none  rounded-md"
              {...register("username", { required: true, minLength: 5 })}
              aria-invalid={errors.username ? "true" : "false"}
            />

            {errors.username?.type === "min" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                {" "}
                Minimum of 5 Characters
              </p>
            )}
            {errors.username?.type === "required" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                {" "}
                Username is required
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-2">
            <label
              htmlFor=""
              className=" text-text-gray dark:text-white-400 dark:font-normal text-sm  font-bold font-inter"
            >
              Password
            </label>
            <input
              type="password"
              className=" placeholder:text-sm border-border  border h-[35px] px-3 focus:outline-none  rounded-md"
              {...register("password", { required: true, minLength: 6 })}
              aria-invalid={errors.password ? "true" : "false"}
            />

            {errors.password?.type === "minLength" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                {" "}
                Minimum of 6 Characters
              </p>
            )}
            {errors.password?.type === "required" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                {" "}
                Password is required
              </p>
            )}
          </div>
      
          <input
            type="submit"
            value="Login"
            className="p-3 rounded-md text-[white] font-semibold bg-black cursor-pointer dark:hover:bg-white-100 dark:hover:text-black transition-colors duration-150"
          />
          <p className=" text-sm text-text-gray dark:text-white-400 dark:font-normal">
            Not yet registered?{" "}
            <Link
              href="/register"
              className=" text-bold text-black dark:text-white-100 dark:font-normal font-bold underline underline-offset-2"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default page;
