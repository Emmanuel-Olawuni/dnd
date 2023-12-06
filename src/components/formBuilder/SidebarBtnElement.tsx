import React from "react";
import { FormElement } from "./FormElements";
import { Button, cn } from "@nextui-org/react";
import { useDraggable } from "@dnd-kit/core";

const SidebarBtnElement = ({ formElements }: { formElements: FormElement }) => {
  const draggable = useDraggable({
    id: `designer-btn-${formElements.type}`,
    data: {
      type: formElements.type,
      isDesignerBtnElement: true,
    },
  });
  const { label, icon: Icon } = formElements.designerBtnElements;
  return ( 
    <button
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className={cn(
        " flex flex-col text-center items-center justify-center text-white-100  font-nunito font-semibold tracking-widest text-sm rounded-md gap-2 h-[120px] w-[120px] cursor-grab bg-white-200/25",
        draggable.isDragging && " ring-2 ring-white-300 "
      )}
    >
      <Icon className="h-8 w-8 dark:text-white text-[green] cursor-grab" />
      <p className="text-xs">{label}</p>
    </button>
  );
};

export const SidebarBtnElementDragOverlay = ({
  formElements,
}: {
  formElements: FormElement;
}) => {
  
  const { label, icon: Icon } = formElements.designerBtnElements;
  return (
    <Button 
      className={cn(" flex flex-col gap-2 h-[120px] w-[120px] cursor-grab")}
    >
      <Icon className="h-8 w-8 text-white cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export default SidebarBtnElement;
