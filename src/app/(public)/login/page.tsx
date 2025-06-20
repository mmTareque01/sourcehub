// import LoginForm from '@/pages/Login.page'
import React from 'react'
import { login } from './actions'

export default function page() {
  return (
    // <LoginForm login={login} />
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-amber-300 border-2 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold ">Welcome Back</h1>
          <p className=" mt-2">Admin Login</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium  mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name='email'
              // value={email}
              // onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium  mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name='password'
              // value={password}
              // onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            formAction={login}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
          >
            Sign in
          </button>
        </form>

      </div>
    </div>
  )
}
