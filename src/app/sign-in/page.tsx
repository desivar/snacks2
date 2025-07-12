'use client';

import { FaGoogle, FaApple } from 'react-icons/fa';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg">
            <FaGoogle /> Continue with Google
          </button>
          
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-lg">
            <FaApple /> Continue with Apple
          </button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            
            <button type="submit" className="w-full bg-[var(--mint)] text-white py-2 px-4 rounded-lg hover:bg-[var(--peach)] transition">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}