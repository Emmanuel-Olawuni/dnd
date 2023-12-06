import React from "react";
import UseDesigner from "../hooks/UserDesigner";
import FormElementSidebar from "./FormElementSidebar";
import FormPropertiesSideBar from "./FormPropertiesSideBar";

const DesignerSideBar = () => {
  const { selectedElement } = UseDesigner();
  return (
    <aside className=" flex flex-grow w-[400px] max-w-[400px] flex-col bg-textBlack border-l border-white-800 p-4 gap-2 overflow-y-auto h-full">
      {!selectedElement && <FormElementSidebar />}
      {selectedElement && <FormPropertiesSideBar />}
    </aside>
  );
};

export default DesignerSideBar;
