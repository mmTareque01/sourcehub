export type FieldValue = string | number | boolean | string[] | undefined;
export type FormData<T> = Record<keyof T, FieldValue>;

export interface Option {
  value: string;
  label: string;
}

export interface FieldError {
  message?: string;
}

export type ValidationRules = {
  required?: string | boolean;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (value: FieldValue) => string | boolean;
};

export interface FieldProps<T extends Record<string, FieldValue>> {
  name: keyof T;
  type?:
    | "text"
    | "email"
    | "password"
    | "select"
    | "textarea"
    | "checkbox"
    | "number"
    | "url";
  label?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: T[keyof T]; // Type matches the property type in T
  options?: Option[];
  component?: React.ElementType;
  validation?: ValidationRules<T>;
  error?: FieldError;
  showPasswordToggle?: boolean;
}

export interface FormProps<T extends Record<string, FieldValue>> {
  fields: FieldProps<T>[];
  onSubmit: (data: FormData<T>) => void;
  loading?: boolean;
  submitText?: string;
  className?: string;
  submitClassName?: string;
  formRef?: React.RefObject<HTMLFormElement>;
}

// In your types file
