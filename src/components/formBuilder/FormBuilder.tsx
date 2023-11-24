import React from "react";
import Designer from "./Designer";
import { MdPreview, MdPublish, MdSave } from "react-icons/md";
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";
import PreviewDialogBtn from "./PreviewDialogBtn";

type form = string | string[];

const FormBuilder = ({ form }: { form: form }) => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor,{
    activationConstraint:{
      delay:300,
      tolerance: 5
    }
  })
  const sensor = useSensors(mouseSensor, touchSensor);
  return (
    <DndContext sensors={sensor}>
      <main className=" flex flex-col h-full w-full">
        <div className="flex justify-between border-b-2 gap-3 items-center">
          <div className=" p-2 font-nunito"> Form : {form}</div>
          <div className="flex">
            <div className="flex justify-center items-center p-2  gap-1 font-nunito text-white-100/80 font-thin tracking-wider text-sm cursor-pointer">
    <PreviewDialogBtn />
            </div>
            <div className="flex justify-center items-center p-2  gap-1 font-nunito text-white-100/80 font-thin tracking-wider  text-sm cursor-pointer">
              <MdSave /> <p>Save</p>
            </div>

            <div className="flex justify-center items-center p-2  gap-1 font-nunito text-white-100/80 font-thin tracking-wider text-sm cursor-pointer">
              <MdPublish /> <p>Publish</p>
            </div>
          </div>
        </div>

        <div className=" w-full  flex  flex-grow items-center justify-center relative overflow-y-auto h-[100vh] bg-textBlack">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default FormBuilder;
