import { TextFieldElements } from "../fields/TextField";
import { CheckboxFieldFormElement } from "../fields/CheckboxField";
import { DateFieldFormElement } from "../fields/DateField";
import { NumberFieldFormElement } from "../fields/NumberField";
import { ParagprahFieldFormElement } from "../fields/ParagraphField";
import { SelectFieldFormElement } from "../fields/SelectField";
import { SeparatorFieldFormElement } from "../fields/SeparatorField";
import { SpacerFieldFormElement } from "../fields/SpacerField";
import { SubTitleFieldFormElement } from "../fields/SubTitleField";
import { TextAreaFormElement } from "../fields/TextAreaField";
import { TitleFieldFormElement } from "../fields/TitleField";

export type ElementsType = | "TextField"
| "TitleField"
| "SubTitleField"
| "ParagraphField"
| "SeparatorField"
| "SpacerField"
| "NumberField"
| "TextAreaField"
| "DateField"
| "SelectField"
| "CheckboxField";

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;
  construct : (id:string) => FormElementsInstance
  designerBtnElements: {
    icon: React.ElementType;
    label: string;
  };
  formComponent: React.FC<{
    elementInstance: FormElementsInstance;
    submitValue?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  propertiesComponents: React.FC<{
    elementInstance: FormElementsInstance;
  }>;

  designerComponent: React.FC<{
    elementInstance: FormElementsInstance;
  }>;
  validate: (formElement: FormElementsInstance, currentValue: string) => boolean;

};
type FormElementsType = {
  [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
  TextField: TextFieldElements,
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldFormElement,
  ParagraphField: ParagprahFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
  NumberField: NumberFieldFormElement,
  TextAreaField: TextAreaFormElement,
  DateField: DateFieldFormElement,
  SelectField: SelectFieldFormElement,
  CheckboxField: CheckboxFieldFormElement,
};
export type FormElementsInstance = {
    id: string,
    type: ElementsType,
    extraAttributes?: Record<string , any>

}