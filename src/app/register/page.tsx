"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import Link from 'next/link';
import api from '@/api/apiApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


interface FormValues {
    username: string;
    email: string;
    password: string;
    claimedCode: string;
}
    

const SignUpForm: React.FC = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<FormValues>({
        username: '',
        email: '',
        password: '',
        claimedCode: ''
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Do something with formData
        try {
            const newFormData = {...formData,isVerified: true, roleId: 1}
        const result = await api.post('/auth/register', newFormData)
            router.push('/login')
            toast.success("Berhasil tambah user")
        console.log(result );
        } catch (err) {

            console.error(err)
            console.log(err)
        
        }
        
    };

    

    useEffect (() =>{

    }, [])


    return (
        <div>
            <ToastContainer />
            <Navbar />

            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>

                    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                        <div className="max-w-xl lg:max-w-3xl">
                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to Eventopia 🦑
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="firstName"
                                        value={formData.username}
                                        onChange={(e)=>setFormData({...formData, username: e.target.value })}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="firstName"
                                        value={formData.email}
                                        onChange={(e)=>setFormData({...formData, email: e.target.value })}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="firstName"
                                        value={formData.password}
                                        onChange={(e)=>setFormData({...formData, password: e.target.value })}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        Refferal Code
                                    </label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="firstName"
                                        value={formData.claimedCode}
                                        onChange={(e)=>setFormData({...formData, claimedCode: e.target.value })}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                {/* Add other form inputs similarly */}

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        type="submit"
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Create an account
                                    </button>
                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Already have an account?
                                        <Link href="/login" className="text-gray-700 underline">
                                            Log in
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SignUpForm;
