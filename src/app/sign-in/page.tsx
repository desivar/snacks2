'use client';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { signIn } from '@/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleCredentialsSubmit = async (formData: FormData) => {
    const result = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <button 
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            <FaGoogle /> Continue with Google
          </button>
          
          <button 
            onClick={() => signIn('apple')}
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
          >
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
          
          <form action={handleCredentialsSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                name="email" 
                type="email" 
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--mint)] focus:ring-[var(--mint)] p-2 border"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                name="password" 
                type="password" 
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--mint)] focus:ring-[var(--mint)] p-2 border"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[var(--mint)] text-white py-2 px-4 rounded-lg hover:bg-[var(--peach)] transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}