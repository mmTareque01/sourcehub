import { FieldProps } from "@/types/Form/form";
import { SubmitProjectFormProps } from "@/types/Form/SubmitProject.form";

export const SubmitProjectFormFields: FieldProps<SubmitProjectFormProps>[] = [
    {
        name: 'title',
        type: 'text' as const,
        label: 'Project Name',
        required: true,
        placeholder: 'Project name',
        validation: {
            required: 'Project name is required',
            minLength: {
                value: 3,
                message: 'Project name  must be at least 3 characters'
            }
        }
    },
    {
        name: 'github',
        type: 'url' as const,
        label: 'Github',
        required: true,
        placeholder: 'https://github.com/your/repo',
        validation: {
            required: 'github is required',
            // pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //     message: 'Invalid email address'
            // }
        }
    },
    {
        name: 'demo',
        type: 'url' as const,
        label: 'Demo URL',
        // required: true,
        placeholder: 'https://yourapp.vercel.com',
        // validation: {
        //     required: 'github is required',
        //     // pattern: {
        //     //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //     //     message: 'Invalid email address'
        //     // }
        // }
    },
    {
        name: 'youtube',
        type: 'url' as const,
        label: 'Youtube tutorials',
        // required: true,
        placeholder: 'https://youtube.com/watch?v=PAJgZ_12QfE',
        // validation: {
        //     required: 'github is required',
        //     // pattern: {
        //     //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //     //     message: 'Invalid email address'
        //     // }
        // }
    },
    {
        name: 'techStacks',
        type: 'text' as const,
        label: 'Tech Stackes',
        required: true,
        placeholder: 'Next js, Express js, Node, Python,....',
        validation: {
            required: 'Tech Stack is required!',
            // pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //     message: 'Invalid email address'
            // }
        }
    },
    {
        name: 'tags',
        type: 'text' as const,
        label: 'Tags',
        // required: true,
        placeholder: 'Next js, Express js, Node, Python,....',
        // validation: {
        //     required: 'Tags is required!',
        //     // pattern: {
        //     //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //     //     message: 'Invalid email address'
        //     // }
        // }
    },
    {
        name: 'description',
        type: 'textarea' as const,
        label: 'Description',
        required: true,
        placeholder: 'Write here...',
        validation: {
            required: 'MesDescriptionsage is required',
            minLength: {
                value: 3,
                message: 'Description must be at least 50 characters'
            }
        }
    }
]



export const ProjectFormFields: FieldProps<SubmitProjectFormProps>[] = [
    {
        name: 'title',
        type: 'text' as const,
        label: 'Project Name',
        required: true,
        placeholder: 'Project name',
        validation: {
            required: 'Project name is required',
            minLength: {
                value: 3,
                message: 'Project name  must be at least 3 characters'
            }
        }
    },
        {
        name: 'bgImg',
        type: 'url' as const,
        label: 'Image',
        required: true,
        placeholder: 'Project Image',
        validation: {
            required: 'Project image is required',

        }
    },
    {
        name: 'github',
        type: 'url' as const,
        label: 'Github',
        required: true,
        placeholder: 'https://github.com/your/repo',
        validation: {
            required: 'github is required',
            // pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //     message: 'Invalid email address'
            // }
        }
    },
    {
        name: 'demo',
        type: 'url' as const,
        label: 'Demo URL',
        // required: true,
        placeholder: 'https://yourapp.vercel.com',
        // validation: {
        //     required: 'github is required',
        //     // pattern: {
        //     //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //     //     message: 'Invalid email address'
        //     // }
        // }
    },
    {
        name: 'youtube',
        type: 'url' as const,
        label: 'Youtube tutorials',
        // required: true,
        placeholder: 'https://youtube.com/watch?v=PAJgZ_12QfE',
        // validation: {
        //     required: 'github is required',
        //     // pattern: {
        //     //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //     //     message: 'Invalid email address'
        //     // }
        // }
    },
    {
        name: 'techStacks',
        type: 'text' as const,
        label: 'Tech Stackes',
        required: true,
        placeholder: 'Next js, Express js, Node, Python,....',
        validation: {
            required: 'Tech Stack is required!',
            // pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //     message: 'Invalid email address'
            // }
        }
    },
    {
        name: 'tags',
        type: 'text' as const,
        label: 'Tags',
        // required: true,
        placeholder: 'Next js, Express js, Node, Python,....',
        // validation: {
        //     required: 'Tags is required!',
        //     // pattern: {
        //     //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //     //     message: 'Invalid email address'
        //     // }
        // }
    },
    {
        name: 'description',
        type: 'textarea' as const,
        label: 'Description',
        required: true,
        placeholder: 'Write here...',
        validation: {
            required: 'MesDescriptionsage is required',
            minLength: {
                value: 3,
                message: 'Description must be at least 50 characters'
            }
        }
    }
]
