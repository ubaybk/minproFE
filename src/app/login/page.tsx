"use client"

import React from 'react';
import Footer from '../footer/page';
import Navbar from '../navbar/page';
import { useState, useEffect } from 'react';
import api from '@/api/apiApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';


const Login: React.FC = () => {
const router = useRouter()
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Animasi untuk munculkan form dengan delay
    const timer = setTimeout(() => {
      setFormVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Do something with formData
        try {
            
        const result = await api.post('/auth/login', {email, password})
        setCookie('access_token', result?.data?.newData?.token);
        setCookie('id_user', result?.data?.newData?.userId);
        setCookie('email', result?.data?.newData?.email);
        setCookie('role', result?.data?.newData?.role);
            router.push('/event')
            toast.success(result?.data?.message)
        console.log(result.data.newData);
        } catch (err) {
          toast.error("Email atau Password Salah")
            console.error(err)
            console.log(err)
        
        }
        
    };

 
    return (
        <div>
          <ToastContainer />
            <Navbar />
            <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-3xl font-semibold text-center mb-4 text-blue-600">Log In</h2>
        <div className={`${formVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                required
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Log in
              </button>


            </div>
          </form>
        </div>
       
      </div>
    </div>


  



            <Footer />
        </div>
    );
};

export default Login;


