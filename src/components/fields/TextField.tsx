"use client";

import { MdTextFields } from "react-icons/md";
import {
  ElementsType,
  FormElement,
  FormElementsInstance,
} from "../formBuilder/FormElements";
import { Input } from "@nextui-org/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import UseDesigner from "../hooks/UserDesigner";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormDescription,
  FormLabel,
} from "./../ui/shadeUi/form";

const type: ElementsType = "Textfield";
const extraAttributes = {
  label: "Text Field",
  helperText: "helper Text",
  required: false,
  placeholder: "Value Here ...",
};

export const TextFieldElements: FormElement = {
  type,
  designerComponent: DesignerComponent,
  formComponent: () => <div>Form Components</div>,
  propertiesComponents: propertiesComponent,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElements: {
    icon: MdTextFields,
    label: "Textfields",
  },
};
type CustomInstance = FormElementsInstance & {
  extraAttributes: typeof extraAttributes;
};

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});
function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementsInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, helperText, placeholder, required } = element.extraAttributes;
  return (
    <div className="flex flex-col w-full gap-2 font-nunito font-medium text-md">
      <label>
        {label}
        {required && "*"}
        <Input readOnly disabled placeholder={placeholder} />
        {helperText && (
          <p className=" text-muted-foreground text-[0.6rem]">{helperText}</p>
        )}
      </label>
    </div>
  );
}
type propertiesFormSchema = z.infer<typeof propertiesSchema>;
function propertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementsInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { updateElement } = UseDesigner();
  const form = useForm<propertiesFormSchema>({
    mode: "onBlur",
    defaultValues: {
      label: element.extraAttributes.label,
      helperText: element.extraAttributes.helperText,
      required: element.extraAttributes.required,
      placeHolder: element.extraAttributes.placeHolder,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(value: propertiesFormSchema) {
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        label: value.label,
        helperText: value.helperText,
        placeHolder: value.placeHolder,
        required: value.required,
      },
    });
  }
  return <Form  {...form}>
<form onBlur={form.handleSubmit(applyChanges)} className=" space-y-3">
<FormField control={form.control} render={({field})=> {
  <FormItem>
    <FormLabel>Label</FormLabel>
    <FormControl>
      <Input />
    </FormControl>
    <FormDescription>
      The label of the field <br /> It will be displayed above the field
    </FormDescription>
    <FormMessage />
  </FormItem>
}} />

</form>
  </Form>;
}
