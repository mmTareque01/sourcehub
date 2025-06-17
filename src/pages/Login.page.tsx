"use client";

// // import Form from "@/components/Form";
// // import { FieldProps } from "@/types/Form/form";

// export interface SignInFormValues {
//   email: string;
//   password: string;
// }

// // export const SignInFormFields: FieldProps<SignInFormValues>[] = [
// //   {
// //     name: "email",
// //     type: "email",
// //     label: "Email Address",
// //     required: true,
// //     placeholder: "your@email.com",
// //     validation: {
// //       required: "Email is required",
// //       pattern: {
// //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
// //         message: "Invalid email address",
// //       },
// //     },
// //   },
// //   {
// //     name: "password",
// //     type: "password",
// //     label: "Password",
// //     required: true,
// //     placeholder: "Enter your password",
// //     showPasswordToggle: true,
// //     validation: {
// //       required: "Password is required",
// //       minLength: {
// //         value: 8,
// //         message: "Password must be at least 8 characters",
// //       },
// //     },
// //   },
// // ];

// export default function LoginForm() {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="flex flex-col max-w-[500px] bg-white  p-5 rounded-2xl  shadow-lg">
//                 {/* <GoBack/> */}
//                 <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
//                     <div>
//                         {/* <GenerateUI
//                             UIComponents={SignInTitle}
//                             wrapperComponent={"div"}
//                             wrapperClassName="mb-5 sm:mb-8"
//                         /> */}
//                         <div>
//                             {/* <SocialLogin /> */}
//                             {/* <OrBorder /> */}

//                             {/* <Form<SignInFormValues>
//                                 fields={SignInFormFields}
//                                 onSubmit={(data)=>{console.log(data)}}
//                                 submitText="Sign In"
//                             /> */}

         
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { useState } from 'react'
import { supabase } from '@/backend/connection'
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Login</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  )
}
