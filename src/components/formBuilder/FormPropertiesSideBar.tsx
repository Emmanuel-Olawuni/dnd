import React from "react";
import UseDesigner from "../hooks/UserDesigner";
import { FormElements } from "./FormElements";
import { Button } from "@nextui-org/react";
import { AiOutlineClose } from "react-icons/ai";

const FormPropertiesSideBar = () => {
  const { selectedElement, setSelectedElement } = UseDesigner();
  if (!selectedElement) return null;
  const Properties = FormElements[selectedElement?.type].propertiesComponents;
  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-white-100/70">Element Properties</p>
        <Button variant="ghost" onClick={() => setSelectedElement(null)} size='md'>
          <AiOutlineClose />
        </Button>
      </div>
      <Properties elementInstance={selectedElement}/>
    </div>
  );
};

export default FormPropertiesSideBar;
