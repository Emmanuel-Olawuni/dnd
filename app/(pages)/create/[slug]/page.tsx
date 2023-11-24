"use client";
import FormBuilder from "@/components/formBuilder/FormBuilder";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { slug } = useParams();

  return (
    <>
      <div>
        <FormBuilder form={slug} />
      </div>
    </>
  );
};

export default page;
