"use client";

import Form from "@/components/Form";
import { FieldProps } from "@/types/Form/form";

export interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInFormFields: FieldProps<SignInFormValues>[] = [
  {
    name: "email",
    type: "email",
    label: "Email Address",
    required: true,
    placeholder: "your@email.com",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    placeholder: "Enter your password",
    showPasswordToggle: true,
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    },
  },
];

export default function LoginForm() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col max-w-[500px] bg-white  p-5 rounded-2xl  shadow-lg">
                {/* <GoBack/> */}
                <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                    <div>
                        {/* <GenerateUI
                            UIComponents={SignInTitle}
                            wrapperComponent={"div"}
                            wrapperClassName="mb-5 sm:mb-8"
                        /> */}
                        <div>
                            {/* <SocialLogin /> */}
                            {/* <OrBorder /> */}

                            <Form<SignInFormValues>
                                fields={SignInFormFields}
                                onSubmit={(data)=>{console.log(data)}}
                                submitText="Sign In"
                            />

         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
