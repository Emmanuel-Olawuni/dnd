"use client";
type formData = {
  username: string;
  password: string;
};
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formData>();
  const submitForm: SubmitHandler<formData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-black text-white-100 font-semibold"
      >
        Login / Sign Up
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold font-xl font-inter">
                Login
              </ModalHeader>
              <form onSubmit={handleSubmit(submitForm)}>
                <ModalBody>
                  <Input
                    {...register("username", { required: true })}
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Username or Email"
                    variant="bordered"
                    aria-invalid={errors.username ? "true" : "false"}
                  />
                  {errors.username?.type === "required" && (
                    <p className="text-[red] font-medium font-inter text-sm">
                      Username is required.
                    </p>
                  )}
                  <Input
                    {...register("password", { required: true, minLength: 6 })}
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    aria-invalid={errors.username ? "true" : "false"}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-[red] font-medium font-inter text-sm">
                      Password is required.
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-[red] font-medium font-inter text-sm">
                      Minimun characters is 6.
                    </p>
                  )}
                </ModalBody>
                <ModalFooter>
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="submit"
                      value="Login"
                      className="p-3 rounded-md text-[white] font-semibold bg-black cursor-pointer dark:hover:bg-white-100 dark:hover:text-black transition-colors duration-150"
                    />

                    <div className="">
                      New User.{" "}
                      <Link
                        href="/register"
                        className=" underline underline-offset-4 font-bold dark:font-normal text-black dark:text-white-100"
                      >
                        {" "}
                        Register Here
                      </Link>
                    </div>
                  </div>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
