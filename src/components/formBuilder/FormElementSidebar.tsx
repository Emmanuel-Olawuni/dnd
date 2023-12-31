import React from "react";
import SidebarBtnElement from "./SidebarBtnElement";
import { FormElements } from "./FormElements";
import { Separator } from "../../shadcnui/ui/separator";

function FormElementsSidebar() {
  return (
    <div>
      <p className="text-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start">Layout elements</p>
        <SidebarBtnElement formElements={FormElements.TitleField} />
        <SidebarBtnElement formElements={FormElements.SubTitleField} />
        <SidebarBtnElement formElements={FormElements.ParagraphField} />
        <SidebarBtnElement formElements={FormElements.SeparatorField} />
        <SidebarBtnElement formElements={FormElements.SpacerField} />

        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start">Form elements</p>
        <SidebarBtnElement formElements={FormElements.TextField} />
        <SidebarBtnElement formElements={FormElements.NumberField} />
        <SidebarBtnElement formElements={FormElements.TextAreaField} />
        <SidebarBtnElement formElements={FormElements.DateField} />
        <SidebarBtnElement formElements={FormElements.SelectField} />
        <SidebarBtnElement formElements={FormElements.CheckboxField} />
      </div>
    </div>
  );
}

export default FormElementsSidebar;
