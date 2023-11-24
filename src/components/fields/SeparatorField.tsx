"use client";

import { ElementsType, FormElement, FormElementsInstance } from "../formBuilder/FormElements";
import { Label } from "../../shadcnui/ui/label";

import { RiSeparator } from "react-icons/ri";
import { Separator } from "../../shadcnui/ui/separator";

const type: ElementsType = "SeparatorField";

export const SeparatorFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
  }),
  designerBtnElements: {
    icon: RiSeparator,
    label: "Separator field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponents: PropertiesComponent,

  validate: () => true,
};

function DesignerComponent({ elementInstance }: { elementInstance: FormElementsInstance }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">Separator field</Label>
      <Separator />
    </div>
  );
}

function FormComponent({ elementInstance }: { elementInstance: FormElementsInstance }) {
  return <Separator />;
}

function PropertiesComponent({ elementInstance }: { elementInstance: FormElementsInstance }) {
  return <p>No properties for this element</p>;
}
