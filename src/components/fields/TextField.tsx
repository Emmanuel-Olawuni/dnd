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
} from "../../shadcnui/ui/form";
import { Switch } from "@/shadcnui/ui/switch";
const type: ElementsType = "TextField";
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
  validate: (formElement: FormElementsInstance, currentValue: string): boolean => {
    const element = formElement as CustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
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
        <Input readOnly radius="md" disabled placeholder={placeholder} className=" text-white  rounded-md" />
        {helperText && (
          <p className=" text-muted-foreground text-[12px]">{helperText}</p>
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
      placeHolder: element.extraAttributes.placeholder,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(value: propertiesFormSchema) {
    const { label, helperText, placeHolder, required } = value;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        label,
        helperText,
        placeHolder,
        required,
      },
    });
  }
  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => e.preventDefault()}
        className=" space-y-3"
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>
                {" "}
                The label of the field. <br /> It will be displayed above the
                field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="placeHolder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Placeholder</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>The Placeholder Text</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='helperText'
          render={({ field }) => (
            <FormItem>
              <FormLabel>HelperText</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>The helperText of the field <br /> It will be displayed below the field. </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='required'
          render={({ field }) => (
            <FormItem className=" flex items-center justify-between rounded-lg  shadow-sm">
              <div className=" space-y-3">


              <FormLabel>Required</FormLabel>
            
              <FormDescription>The helperText of the field <br /> It will be displayed below the field. </FormDescription>
              </div>
              <FormControl>
             <Switch checked={field.value} onCheckedChange={field.onChange} />
             </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
