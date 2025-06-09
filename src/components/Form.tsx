
import React, { useState } from "react";
import Box from "./Box";
import Label from "./Label";
import Button from "./Button";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FieldError, FieldProps, FieldValue, FormProps, FormData } from "@/types/Form/form";



export default function Form<T extends Record<string, FieldValue>>({
    fields,
    onSubmit,
    loading = false,
    submitText = "Submit",
    className = "",
    submitClassName = "",
    formRef,

}: FormProps<T>) {

    const getInitialFormData = (): FormData<T> => {
        const initialData = {} as FormData<T>;
        fields.forEach(field => {
            if (field.defaultValue !== undefined) {
                initialData[field.name as keyof T] = field.defaultValue as T[keyof T];
            } else if (field.type === 'checkbox') {
                initialData[field.name as keyof T] = false as T[keyof T];
            } else {
                initialData[field.name as keyof T] = '' as T[keyof T];
            }
        });
        return initialData;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, type } = target;

        let value: FieldValue;

        if (type === 'checkbox') {
            value = target.checked;
        } else if (type === 'select-multiple' && target instanceof HTMLSelectElement) {
            value = Array.from(target.selectedOptions).map(option => option.value);
        } else {
            value = target.value;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateField = (name: string, value: FieldValue, field: FieldProps<T>): string | undefined => {
        if (!field.validation) return undefined;

        const { required, minLength, maxLength, pattern, validate } = field.validation;

        if (required) {
            if (value === undefined || value === null) {
                return typeof required === 'string' ? required : 'This field is required';
            }
            if (typeof value === 'string' && value.trim() === '') {
                return typeof required === 'string' ? required : 'This field is required';
            }
            if (Array.isArray(value) && value.length === 0) {
                return typeof required === 'string' ? required : 'This field is required';
            }
        }

        if (minLength && typeof value === 'string' && value.length < minLength.value) {
            return minLength.message;
        }

        if (maxLength && typeof value === 'string' && value.length > maxLength.value) {
            return maxLength.message;
        }

        if (pattern && typeof value === 'string' && !pattern.value.test(value)) {
            return pattern.message;
        }

        if (validate) {
            const validationResult = validate(value);
            if (typeof validationResult === 'string') {
                return validationResult;
            }
            if (validationResult === false) {
                return 'Invalid value';
            }
        }

        return undefined;
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, FieldError> = {};
        let isValid = true;

        fields.forEach(field => {
            const errorMessage = validateField(field.name as string, formData[field.name], field);
            if (errorMessage) {
                newErrors[field.name as string] = { message: errorMessage };
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await onSubmit(formData);
                setFormData(getInitialFormData());
                setErrors({});
                setShowPassword({});
            } catch (error) {
                // Handle submission error if needed
                console.log(error)
            }
        }
    };


    const togglePasswordVisibility = (fieldName: string) => {
        setShowPassword(prev => ({
            ...prev,
            [fieldName]: !prev[fieldName]
        }));
    };

    const renderField = (field: FieldProps<T>) => {
        const commonProps = {
            id: field.name as string,
            name: field.name as string,
            required: field.required,
            className: `w-full p-2 border rounded ${errors[field.name as string] ? 'border-error-500' : 'border-gray-300'}`,
            placeholder: field.placeholder,
            onChange: handleChange,
        };

        const valueProps = field.type === 'checkbox'
            ? { checked: Boolean(formData[field.name as keyof T]) }
            : { value: formData[field.name as keyof T] as string | number | readonly string[] | undefined };

        switch (field.type) {
            case "select":
                return (
                    <Box as="select" {...commonProps} {...valueProps}>
                        <option value="">{field.placeholder || 'Select an option'}</option>
                        {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Box>
                );

            case "textarea":
                return (
                    <Box
                        as="textarea"
                        rows={4}
                        {...commonProps}
                        {...valueProps}
                    />
                );

            case "checkbox":
                return (
                    <Box
                        as="input"
                        type="checkbox"
                        {...commonProps}
                        {...valueProps}
                        // className={`mr-2 ${errors[field.name] ? 'border-error-500' : 'border-gray-300'}`}
                        className="mr-2"
                    />
                );

            case "password":
                return (
                    <div className="relative">
                        <Box
                            as="input"
                            type={showPassword[field.name as string] ? "text" : "password"}
                            {...commonProps}
                            {...valueProps}
                        />
                        {field.showPasswordToggle && (
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-900"
                                onClick={() => togglePasswordVisibility(field.name as string)}
                            >
                                {showPassword[field.name as string] ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </button>
                        )}
                    </div>
                );

            default:
                return (
                    <Box
                        as={field.component || "input"}
                        type={field.type || "text"}
                        {...commonProps}
                        {...valueProps}
                    />
                );
        }
    };


    const [formData, setFormData] = useState<FormData<T>>(getInitialFormData);
    const [errors, setErrors] = useState<Record<string, FieldError>>({});
    const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});


    return (
        <form
            onSubmit={handleSubmit}
            className={`space-y-6 ${className}`}
            ref={formRef}
        >
            {fields.map((field) => (
                <div key={field.name as string} className="mb-4">
                    {field.label && (
                        <Label htmlFor={field.name as string}>
                            {field.label}
                            {field.required && <span className="text-error-500">*</span>}
                        </Label>
                    )}

                    {renderField(field)}

                    {errors[field.name as string] && (
                        <p className="mt-1 text-sm text-error-500">{errors[field.name as string].message}</p>
                    )}
                </div>
            ))}

            <Button
                type="submit"
                disabled={loading}
                className={submitClassName}
            >
                {loading ? "Processing..." : submitText}
            </Button>
        </form>
    );
}