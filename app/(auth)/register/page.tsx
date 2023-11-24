"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { countryList } from "@/utils/country";


enum GenderEnum {
  female = "female",
  male = "male",
}
enum where {
  twitter = "twitter",
  linkedIn = "linkedIn",
  Other = "Other Social Media",
  Blogs = "Blogs",
  Friend = "Family & Friend",
}

interface IFormInput {
  firstName: string;
  lastName: string;
  country: string;
  username: string;
  password: string;
  email: string;
  gender: GenderEnum;
  where: where;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <div className="w-full md:w-1/2 mx-auto px-6 py-4 leading-relaxed  border-1 border-text-gray border-opacity-70">
        <div>
          <h4 className=" text-black dark:text-white-300  font-inter text-xl font-semibold">
            Welcome, let's create an account
          </h4>
          <p className=" text-text-gray  dark:text-white-200 dark:font-light font-inter text-sm">
            Create an account to keep track of your customers, and contributors.
            Once your account has been created then don’t forget to verify your
            account through mail.
          </p>
        </div>

        {/* form  */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[16px] py-4"
        >
          <div className=" flex justify-between flex-col md:flex-row">
            <div className=" flex flex-col gap-1.5">
              <label
                htmlFor=""
                className=" text-text-gray  dark:text-white-200 dark:font-light text-sm  font-bold font-inter"
              >
                First Name
              </label>
              <input
                {...register("firstName", { required: true })}
                placeholder="Your First Name"
                className=" placeholder:text-sm border-border  border h-[35px] px-3 focus:outline-none w-[270px] rounded-md"
                aria-invalid={errors.firstName ? "true" : "false"}
              />

              {errors.firstName?.type === "required" && (
                <p
                  role="alert"
                  className=" text-[red] text-sm font-medium font-inter"
                >
                  This field is required
                </p>
              )}
            </div>
            <div className=" flex flex-col gap-1.5">
              <label
                htmlFor="Last"
                className=" text-text-gray  dark:text-white-200 dark:font-light text-sm  font-bold font-inter"
              >
                Last Name
              </label>
              <input
                {...register("lastName", { required: true })}
                placeholder="Your Last Name"
                className=" placeholder:text-sm  border-border border h-[35px] px-3 focus:outline-none w-[270px] rounded-md"
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName?.type === "required" && (
                <p
                  role="alert"
                  className=" text-[red] text-sm font-medium font-inter"
                >
                  This field is required
                </p>
              )}
            </div>
          </div>
          <div className=" flex flex-col ">
            <label
              htmlFor=""
              className=" text-text-gray  dark:text-white-200 dark:font-light text-sm  font-bold font-inter"
            >
              Username
            </label>
            <input
              {...register("username", {
                required: true,
                minLength: 5,
              })}
              className=" placeholder:text-sm border-border  border h-[35px] px-3 focus:outline-none w-full rounded-md"
              aria-invalid={errors.username ? "true" : "false"}
            />
            {errors.username?.type === "required" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                Username is required
              </p>
            )}

            {errors.username?.type === "minLength" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                Minimum of 5 characters
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor=""
              className=" text-text-gray  dark:text-white-200 dark:font-light text-sm  font-bold font-inter"
            >
              Email
            </label>
            <input
              type="email"
              className=" placeholder:text-sm border-border  border h-[35px] px-3 focus:outline-none w-full rounded-md"
              {...register("email", {
                min: 18,
                max: 99,
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email?.type === "pattern" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                Incorrect Email Pattern{" "}
              </p>
            )}
            {errors.email?.type === "required" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                Email is required
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor=""
              className=" text-text-gray  dark:text-white-200 dark:font-light text-sm  font-bold font-inter"
            >
              Password
            </label>
            <input
              type="password"
              className=" placeholder:text-sm border-border  border h-[35px] px-3 focus:outline-none w-full rounded-md"
              {...register("password", {
                minLength: 6,

                required: true,
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                Password is required.{" "}
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                Password should be 6 characters at least.{" "}
              </p>
            )}
          </div>

          <div className=" flex flex-col">
            <label
              htmlFor=""
              className=" text-text-gray  dark:text-white-200 dark:font-light text-sm  font-bold font-inter"
            >
              Country
            </label>
            <select
              {...(register("country" , {
                required: true
              }))}
              aria-invalid={errors.country ? "true" : "false"}
              className=" placeholder:text-sm border-border text-text-gray  dark:text-white-200 dark:font-light  border h-[35px] px-3 focus:outline-none w-full rounded-md"
            >
              <option
                value=""
                className=" text-black text-sm  font-medium font-inter"
              >
                -- Select One --
              </option>
              {countryList.map((x) => (
                <option
                  key={x}
                  value={x}
                  className=" text-black dark:bg-white-100 text-sm  font-medium font-inter"
                >
                  {x}
                </option>
              ))}
            </select>
            {errors.country?.type === "required" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                Select a country.
              </p>
            )}
          </div>

          {/* GENDER  */}
          <div className=" flex flex-col">
            <label
              htmlFor=""
              className=" text-text-gray  dark:text-white-200 dark:font-light text-sm  font-bold font-inter"
            >
              Gender
            </label>
            <select
              {...register("gender", {
                required: true,
              })}
              aria-invalid={errors.gender ? "true" : "false"}
              className=" placeholder:text-sm border-border text-text-gray  dark:text-white-200 dark:font-light  border h-[35px] px-3 focus:outline-none w-full rounded-md"
            >
              <option
                value=""
                className=" text-black text-sm   dark:bg-white-100  font-medium font-inter"
              >
                -- Select One --
              </option>
              <option
                value="male"
                className=" text-black text-sm  dark:bg-white-100   font-medium font-inter"
              >
                male
              </option>

              <option
                value="female"
                className=" text-black text-sm   dark:bg-white-100  font-medium font-inter"
              >
                female
              </option>
            </select>
            {errors.gender?.type === "required" && (
              <p
                role="alert"
                className=" text-[red] text-sm font-medium font-inter"
              >
                Select a gender.
              </p>
            )}
          </div>
          {/* WHERE  */}
          <div className=" flex flex-col">
            <label
              htmlFor=""
              className=" text-text-gray  dark:text-white-200 dark:font-light text-sm  font-bold font-inter"
            >
              Where did you first hear about DestLab?{" "}
            </label>
            <select
              {...register("where" )}
              aria-invalid={errors.where ? "true" : "false"}
              className=" placeholder:text-sm border-border text-text-gray  dark:text-white-200 dark:font-light  border h-[35px] px-3 focus:outline-none w-full rounded-md"
            >
              <option
                value="NIL"
                className=" text-black text-sm    dark:bg-white-100 font-medium font-inter"
              >
                -- Select One --
              </option>

              <option
                value="twitter"
                className=" text-black text-sm   dark:bg-white-100  font-medium font-inter capitalize"
              >
                twitter
              </option>
              <option
                value="linkedIn"
                className=" text-black text-sm    dark:bg-white-100 font-medium font-inter capitalize"
              >
                linkedIn
              </option>
              <option
                value="Blogs"
                className=" text-black text-sm    dark:bg-white-100 font-medium font-inter capitalize"
              >
                Blogs
              </option>
              <option
                value="Friend"
                className=" text-black text-sm   dark:bg-white-100  font-medium font-inter capitalize"
              >
                Family & Friend
              </option>
              <option
                value="others"
                className=" text-black text-sm  dark:bg-white-100 font-medium font-inter capitalize"
              >
                others
              </option>
            </select>
          </div>
          {/* CHECKBOX  */}
          <div className=" flex flex-col gap-2">
            <p className=" text-text-gray  dark:text-white-200 dark:font-light text-sm py-2 ">
              By continuing you agree to the DestLab{" "}
              <Link
                href="#"
                className="font-bold text-black dark:text-white-100 dark:font-medium text-sm underline underline-offset-2"
                title="terms of service"
              >
                terms of service{" "}
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                title="privacy policy"
                className="font-bold text-black dark:text-white-100  dark:font-medium text-sm underline underline-offset-2"
              >
                privacy policy{" "}
              </Link>
            </p>
            <div className=" flex justify-end flex-col gap-2">
              <input
                type="submit"
                value="Continue"
                className="p-3 rounded-md text-[white] font-semibold bg-black cursor-pointer dark:hover:bg-white-100 dark:hover:text-black transition-colors duration-150" 
                />
              <p className=" text-sm text-text-gray">
                Already registered?{" "}
                <Link
                  href="/login"
                  className=" text-bold text-black dark:text-white-100 font-bold underline underline-offset-2"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
