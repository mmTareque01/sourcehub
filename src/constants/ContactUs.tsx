import { ContactUsFormProps } from "@/types/Form/ContactUs.form";
import { FieldProps } from "@/types/Form/form";

export const ContactUsFormFields:FieldProps<ContactUsFormProps>[] = [
    {
        name: 'name',
        type: 'text' as const,
        label: 'Name',
        required: true,
        placeholder: 'Your name',
        validation: {
            required: 'Username is required',
            minLength: {
                value: 3,
                message: 'Username must be at least 3 characters'
            }
        }
    },
    {
        name: 'email',
        type: 'email' as const,
        label: 'E-mail',
        required: true,
        placeholder: 'Your e-mail',
        validation: {
            required: 'Email is required',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
            }
        }
    },
    {
        name: 'message',
        type: 'textarea' as const,
        label: 'Message',
        required: true,
        placeholder: 'Write here...',
        validation: {
            required: 'Message is required',
            minLength: {
                value: 3,
                message: 'Message must be at least 50 characters'
            }
        }
    }
]

