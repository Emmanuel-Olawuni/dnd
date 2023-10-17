"use client";
type formData = {
  title: string;
  description: string;
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
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

export default function RequestModal() {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formData>();
  const submitForm: SubmitHandler<formData> = (data) => {
    router.push(`/create/${data.title}`);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-black text-white-100 font-semibold font-nunito"
      >
        Get Started
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
                Create Form
              </ModalHeader>
              <form onSubmit={handleSubmit(submitForm)}>
                <ModalBody>
                  <Input
                    {...register("title", { required: true })}
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl font-nunito text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Title"
                    variant="bordered"
                    aria-invalid={errors.title ? "true" : "false"}
                    className="font-nunito"
                  />
                  {errors.title?.type === "required" && (
                    <p className="text-[red] font-medium font-inter text-sm">
                      Title is required.
                    </p>
                  )}
                  <Input
                    {...register("description", {
                      required: true,
                      minLength: 6,
                    })}
                    label="Description"
                    variant="bordered"
                    aria-invalid={errors.description ? "true" : "false"}
                    className="font-nunito"
                  />
                  {errors.description?.type === "required" && (
                    <p className="text-[red] font-medium font-inter text-sm">
                      Description is required.
                    </p>
                  )}
                  {errors.description?.type === "minLength" && (
                    <p className="text-[red] font-medium font-inter text-sm">
                      Minimun characters is 6.
                    </p>
                  )}
                </ModalBody>
                <ModalFooter>
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="submit"
                      value="Start"
                      className="p-3 font-nunito rounded-md text-[white] font-semibold bg-black cursor-pointer dark:hover:bg-white-100 dark:hover:text-black transition-colors duration-150"
                    />
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
