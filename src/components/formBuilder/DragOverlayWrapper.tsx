import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SidebarBtnElementDragOverlay } from "./SidebarBtnElement";
import { FormElements, ElementsType } from "./FormElements";
import UseDesigner from "../hooks/UserDesigner";

const DragOverlayWrapper = () => {
  const { elements } = UseDesigner();
  const [draggedItem, setDragItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart(event) {
      setDragItem(event.active);
    },
    onDragCancel() {
      setDragItem(null);
    },
    onDragEnd: () => {
      setDragItem(null);
    },
  });
  if (!draggedItem) return null;
  let node = <div>No drag overlay</div>;
  const isSidebarElement = draggedItem?.data?.current?.isDesignerBtnElement;

  if (isSidebarElement) {
    const type = draggedItem?.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElements={FormElements[type]} />;
  }
  const isDesignerElement = draggedItem.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementID = draggedItem?.data?.current?.elementID;
    const element = elements.find((el) => el === elementID);
    if (!element) {
      node = <div>Element Not Found !</div>;
    } else {
      const DesignerElementComponent =
        FormElements[element.type].designerComponent;

      node = (
        <div className=" pointer-events-none flex border rounded-md w-full py-2 px-4 opacity-80 bg-textBlack h-[120px] ">
          <DesignerElementComponent elementInstance={element} />
        </div>
      );
    }
  }
  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
