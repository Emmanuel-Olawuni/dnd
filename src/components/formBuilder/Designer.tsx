import React, { useState } from "react";
import DesignerSideBar from "./DesignerSideBar";
import {
  DragEndEvent,
  useDndMonitor,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { Button, cn } from "@nextui-org/react";
import { idGenerator } from "@/lib/idGenerator";
import {
  FormElements,
  ElementsType,
  FormElementsInstance,
} from "./FormElements";
import { BiSolidTrash } from "react-icons/bi";
import UseDesigner from "../hooks/UserDesigner";
const Designer = () => {
  const { elements, addElement, selectedElement, setSelectedElement } =
    UseDesigner();
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });
  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {

      const { active, over } = event;

      if (!active || !over) return;

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
      if (isDesignerBtnElement) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator()
        );
        addElement(0, newElement);
      }
    },
  });

  return (
    <div className="flex w-full h-full">
      <div
        className="p-4  w-full"
        onClick={() => {
          if (selectedElement) setSelectedElement(null);
        }}
      >
        <div
          ref={droppable.setNodeRef}
          className={cn(
            " bg-textBlack flex items-center justify-start  max-w-[920px] h-full m-auto rounded-xl overflow-y-auto  flex-1 flex-col ",
            droppable.isOver && "ring-2 ring-white-200"
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="  text-3xl text-white-100 font-nunito flex flex-grow font-bold items-center tracking-wider">
              Drop Here
            </p>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded-md bg-white-100/20"></div>
            </div>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col  w-full gap-4 p-4">
              {elements.map((x) => (
                <DesignerElementWrapper key={x.id} element={x} />
              ))}
            </div>
          )}
        </div>
      </div>
      <DesignerSideBar />
    </div>
  );

  function DesignerElementWrapper({
    element,
  }: {
    element: FormElementsInstance;
  }) {
    const { removeElement, setSelectedElement, selectedElement } =
      UseDesigner();

    const topHalf = useDroppable({
      id: element.id + "-top",
      data: {
        type: element.type,
        elementId: element.id,
        isTopHalfDesignerElement: true,
      },
    });

    const bottomHalf = useDroppable({
      id: element.id + "-bottom",
      data: {
        type: element.type,
        elementId: element.id,
        isBottomHalfDesignerElement: true,
      },
    });
    const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);

    // draggable items
    const draggable = useDraggable({
      id: element.id + "-drag-handler",
      data: {
        type: element.type,
        elementID: element.id,
        isDesignerElement: true,
      },
    });
    if(draggable.isDragging) return ;
    const DesignerElement = FormElements[element.type].designerComponent;
console.log(selectedElement);


    return (
      <div
        // ref={draggable.setNodeRef}
        // {...draggable.listeners}
        // {...draggable.attributes}
        // // onMouseEnter={() => {
        //   setMouseIsOver(true);
        // }}
        // onMouseLeave={() => {
        //   setMouseIsOver(false);
        // }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedElement(element);
        }}
        className=" relative h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-inset ring-accent"
      >
        <div
          ref={topHalf.setNodeRef}
          className=" absolute  w-full h-1/2 rounded-t-md"
        ></div>
        <div
          ref={bottomHalf.setNodeRef}
          className=" absolute bottom-0  w-full h-1/2 rounded-b-md"
        ></div>
        {mouseIsOver && (
          <>
            <div className="absolute right-0 h-full">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  removeElement(element.id);
                }}
                variant="flat"
                className="flex justify-center h-full border rounded-md rounded-l-none bg-[red]"
              >
                <BiSolidTrash className="h-6 w-6 text-white-200" />
              </Button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
              <p className="text-muted-foreground text-sm">
                Click for properties or drag to move
              </p>
            </div>
          </>
        )}
        {topHalf.isOver && (
          <div className=" absolute top-0 w-full h-[7px] rounded-b-none rounded-md bg-white-100"></div>
        )}
        <div
          className={cn(
            "flex w-full h-[120px] items-center rounded-md bg-accent/20 px-4 py-2 pointer-events-none opacity-100",
            mouseIsOver && "opacity-20",
        )}
        >
          <DesignerElement elementInstance={element} />
        </div>
        {bottomHalf.isOver && (
          <div className=" absolute bottom-0 w-full rounded-b-none h-[7px] rounded-md bg-white-100"></div>
        )}
      </div>
    );
  }
};

export default Designer;
