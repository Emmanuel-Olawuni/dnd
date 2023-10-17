import { TextFieldElements } from "../fields/TextField";

export type ElementsType = "Textfield";
export type FormElement = {
  type: ElementsType;
  construct : (id:string) => FormElementsInstance
  designerBtnElements: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC<{
    elementInstance: FormElementsInstance
  }>;
  formComponent: React.FC;
  propertiesComponents: React.FC<{
    elementInstance: FormElementsInstance
  }>;
};
type FormElementsType = {
  [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
  Textfield: TextFieldElements,
};
export type FormElementsInstance = {
    id: string,
    type: ElementsType,
    extraAttributes?: Record<string , any>

}