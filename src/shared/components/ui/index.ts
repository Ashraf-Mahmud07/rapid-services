// UI components barrel file.
//
// When adding components, use logical Tailwind CSS classes (ps-*, pe-*, ms-*, me-*, start-*, end-*)
// instead of physical ones (pl-*, pr-*, left-*, right-*) so layouts flip correctly in RTL
// without per-component overrides.

export { Button } from "./Button";
export type { ButtonProps } from "./Button";

export { Input } from "./Input";
export type { InputProps } from "./Input";

export { Textarea } from "./Textarea";
export type { TextareaProps } from "./Textarea";

export { Select } from "./Select";
export type { SelectProps, SelectOption } from "./Select";

export { Checkbox } from "./Checkbox";
export type { CheckboxProps } from "./Checkbox";

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

export { RadioGroup } from "./Radio";
export type { RadioGroupProps, RadioOption } from "./Radio";

export { Switch } from "./Switch";
export type { SwitchProps } from "./Switch";

export { DatePicker } from "./DatePicker";
export type { DatePickerProps } from "./DatePicker";

export { OtpInput } from "./OtpInput";
export type { OtpInputProps } from "./OtpInput";

export { Label } from "./Label";
export type { LabelProps } from "./Label";

export { PasswordInput } from "./PasswordInput";
export type { PasswordInputProps } from "./PasswordInput";
