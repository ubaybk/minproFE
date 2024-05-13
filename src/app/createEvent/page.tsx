"use client"

import React, { useState } from 'react';
import Footer from '../footer/page';
import Navbar from '../navbar/page';
import { useRouter } from 'next/navigation';
import api from '@/api/apiApp';
import { ToastContainer, toast } from 'react-toastify';

interface FormValues {
    // Tambahkan properti yang diperlukan di sini
    organizer_id: string,
    name: string,
    dateStart: string,
    dateEnd: string,
    time: string,
    location: string,
    desc: string,
    categoryName: string,
    discount: any,
    startAtDiscount: string,
    endAtDiscount: string,
    price: any,
    quota: any,

}

const CreateEvent: React.FC = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<FormValues>({
        organizer_id: '',
        name: '',
        dateStart: '',
        dateEnd: '',
        time: '',
        location: '',
        desc: '',
        categoryName: '',
        discount: '',
        startAtDiscount: '',
        endAtDiscount: '',
        price: '',
        quota: '',
    })

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Do something with formData
        try {
            const newFormData = { ...formData, isVerified: true, roleId: 1 }
            const result = await api.post('/event', newFormData)
            router.push('/event')
            toast.success("Berhasil tambah event")
            console.log(result);
        } catch (err) {

            console.error(err)
            console.log(err)

        }

    };


    return (
        <div>
            <Navbar />

            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <div className="lg:col-span-2 lg:py-12 flex flex-col items-center">
                                <div className="flex items-center mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v1.406l1.098-.949a.5.5 0 1 1 .604.796L10 7.939l-2.702-2.275a.5.5 0 1 1 .604-.796L9 5.407V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M2.293 7.293a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M13.098 8.555l-2.702 2.275a.5.5 0 1 1-.604-.796L11 9.407V11a1 1 0 0 1-1 1 1 1 0 0 1-1-1V9.406L6.902 9.999a.5.5 0 1 1-.604-.796l1.098-.949V4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2.593l1.098-.949a.5.5 0 1 1 .604.796zM18 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M2 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM15 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M4.293 16.707a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-4xl font-bold text-pink-600 ml-4">Eventopia</span>
                                </div>

                                <p className="text-2xl font-bold text-black-600">
                                    Create Your Event in here..!!
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">

                          
                                <div>
                                    <label className="space-y-4 sr-only" htmlFor="name">
                                        Name Event
                                    </label>
                                    <input
                                        className="mb-3 w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Event"
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e)=>setFormData({...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className="space-y-4 sr-only" htmlFor="name">
                                        Category
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Category"
                                        type="text"
                                        id="name"
                                        value={formData.categoryName}
                                        onChange={(e)=>setFormData({...formData, categoryName: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">
                                            Start Date
                                        </label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Start Date"
                                            type="date"
                                            id="email"
                                            value={formData.dateStart}
                                        onChange={(e)=>setFormData({...formData, dateStart: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">
                                            End Date
                                        </label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="End Date"
                                            type="date"
                                            id="phone"
                                            value={formData.dateEnd}
                                        onChange={(e)=>setFormData({...formData, dateEnd: e.target.value })}
                                            
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="name">
                                            Location
                                        </label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Location"
                                            type="text"
                                            id="name"
                                            value={formData.location}
                                            onChange={(e)=>setFormData({...formData, location: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="name">
                                            Discount
                                        </label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Discount"
                                            type="text"
                                            id="name"
                                            value={formData.discount}
                                        onChange={(e)=>setFormData({...formData, discount: +e.target.value })}
                                        />
                                    </div>

                                    <div>
                                    <label className="sr-only" htmlFor="name">
                                        Start Discount Date
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Date Start Discount"
                                        type="date"
                                        id="name"
                                        value={formData.startAtDiscount}
                                        onChange={(e)=>setFormData({...formData, startAtDiscount: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="name">
                                    Date End Discount
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Date End Discount"
                                        type="date"
                                        id="name"
                                        value={formData.endAtDiscount}
                                        onChange={(e)=>setFormData({...formData, endAtDiscount: e.target.value })}
                                    />
                                </div>

                                    <div>
                                        <label className="sr-only" htmlFor="name">
                                            Price
                                        </label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Price"
                                            type="text"
                                            id="name"
                                            value={formData.price}
                                        onChange={(e)=>setFormData({...formData, price: +e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="name">
                                            Quota
                                        </label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Quota"
                                            type="text"
                                            id="name"
                                            value={formData.quota}
                                        onChange={(e)=>setFormData({...formData, quota: +e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">
                                        Description
                                    </label>
                                    <textarea
                                        className="mt-3 w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Description"
                                        rows={8}
                                        id="message"
                                        value={formData.desc}
                                        onChange={(e)=>setFormData({...formData, desc: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Create Event
                                    </button>
                                </div>
                            
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CreateEvent;
