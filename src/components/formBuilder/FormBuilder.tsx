import React, { useEffect, useState } from "react";
import Designer from "./Designer";
import { MdPreview, MdPublish, MdSave } from "react-icons/md";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";
import PreviewDialogBtn from "./PreviewDialogBtn";
import SaveFormBtn from "./SaveFormBtn";
import UseDesigner from "../hooks/UserDesigner";
import PublishFormBtn from "./PublishFormBtn";

type form = string | string[];

const FormBuilder = ({ form }: { form: form }) => {
  const [isReady, setIsReady] = useState(false);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });
  const sensor = useSensors(mouseSensor, touchSensor);
  const { setElements } = UseDesigner();
  // useEffect(() => {
  //   const element = JSON.parse(form.content);
  //   setElements(element);
  // }, [form, setElements]);

  return (
    <DndContext sensors={sensor}>
      <main className=" flex flex-col h-full w-full">
        <div className="flex justify-between border-b-2 gap-3 items-center">
          <div className=" p-2 font-nunito"> Form : {form}</div>
          <div className="flex">
            <div className="flex justify-center items-center p-2  gap-1 font-nunito text-white-100/80 font-thin tracking-wider text-sm cursor-pointer">
              <PreviewDialogBtn />
            </div>

            {/* <div className="flex justify-center items-center p-2  gap-1 font-nunito text-white-100/80 font-thin tracking-wider  text-sm cursor-pointer">
              <MdSave /> <p>Save</p>

              also add an input read  only that shows the share url if the form is published
            </div> */}

            {/* if form is not published  */}
            <SaveFormBtn id={1} />
            {/* 
            <div className="flex justify-center items-center p-2  gap-1 font-nunito text-white-100/80 font-thin tracking-wider text-sm cursor-pointer">
              <MdPublish /> <p>Publish</p>
            </div> */}
            <PublishFormBtn id={1} />

            {/* to  click to copy
              const navigatorr = navigator.clipboard.writeText(shareurl)

            
            
            */}
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
