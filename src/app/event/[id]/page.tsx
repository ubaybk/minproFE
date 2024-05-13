"use client"

import Link from 'next/link';
import React from 'react';
import Footer from '@/app/footer/page';
import Navbar from '@/app/navbar/page';
import { useState, useEffect } from 'react';
import api from '@/api/apiApp';
import { getCookie } from 'cookies-next';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';


// Asumsikan Button komponen telah dibuat sebelumnya

interface EventDetailProps {
    title: string;
    category: string;
    dateTime: string;
    location: string;
    description: string;
}

const DetailEvent: React.FC<EventDetailProps> = ({ title, category, dateTime, location, description }) => {
    const { id } = useParams()

    const router = useRouter()
    // const router = useRouter()

    const accessTokenCookie = getCookie('access_token')
    const userId = getCookie('id_user')

    const [token, setToken] = useState<any>(false);
    const [data, setData] = useState<any>([]);
    const [formData, setFormData] = useState<any>({
        id_user: 0,
        id_event: id,
        transactionDate: new Date(),
        status: "lunas",
        total: 0
    })
    const handleBuyTicket = () => {
        // Logika pembelian tiket
        try {
            const result = api.post("/transaction", formData)
            console.log(result)
            router.push('/transaction')

            // router.push("/transaction");
        } catch (error) {
            
        }
        
    };

    

    const getEventDetail = async () => {
        try {
            const result = await api.get("/event/" + id)
            setData(result.data.data)

        } catch (error) {
            console.log(error)
        }

    }



    useEffect(() => {
        if (id) {
            getEventDetail()
        }

       
        
    }, [])

    useEffect(() => {
        if (accessTokenCookie) {
            setToken(true)
         } else {
             setToken(false)
         }
 
         if (userId){
             setFormData({
                 ...formData,
                 id_user: userId
             })
         }
       
    }, [accessTokenCookie, userId])

    useEffect(() => {
        if(data.discount){
            setFormData({
                ...formData,
                total: data.price - (data.price/100*data.discount)
            })
        }
       
    }, [data])

    console.log(data)

    return (
        <div className='h-screen'>
            <Navbar />
            <section className="bg-gray-900 text-white">



                <div className="mx-auto max-w-screen-xl px-4 py-35 lg:flex lg:h-screen lg:items-center">

                    <div className="flow-root mx-auto">
                        <h1 className="bg-gradient-to-r from-green-300 mb-8 mt-10 text-center via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            {data.name}
                        </h1>
                        <dl className="-my-3 divide-y divide-gray-100 text-sm">
                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-white">Category</dt>
                                <dd className="text-white sm:col-span-2">{data.categoryName}</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-white">Quota</dt>
                                <dd className="text-white sm:col-span-2">{data.quota} person</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-white">Discount</dt>
                                <dd className="text-white sm:col-span-2">{data.discount} %</dd>
                            </div>

                            {/* <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-white">Artist</dt>
                                <dd className="text-white sm:col-span-2">Dewa 19</dd>
                            </div> */}

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-white">Date</dt>
                                <dd className="text-white sm:col-span-2">{data.dateStart} - {data.dateEnd}</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-white">Location</dt>
                                <dd className="text-white sm:col-span-2">{data.location}</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-white">Salary</dt>
                                <dd className="text-white sm:col-span-2">Rp. {data.price}</dd>
                            </div>



                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-white">Bio</dt>
                                <dd className="text-white sm:col-span-2">
                                    {data.desc}
                                </dd>
                            </div>
                            <div className="mt-8 flex flex-wrap justify-center gap-4"
                            >
                                {token && 
                                <button
                            onClick={()=> handleBuyTicket() }
                                    className="block w-full rounded mt-5 border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                                    BUY
                                </button>
                                }
                                

                            </div>
                        </dl>
                    </div>


                </div>
            </section>







            <Footer />
        </div>
    );
};

export default DetailEvent;
