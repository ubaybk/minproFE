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
import moment from 'moment';


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
    const [user, setUser] = useState<any>([]);
    const [pointTogle, setPointTogle] = useState<any>(false);
    const [voucherClaimTogle, setVoucherClaimTogle] = useState<any>(false);
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

    const getUserDetail = async () => {
        try {
            const result = await api.get("/auth/register/")
            setUser(result.data.data[0])

        } catch (error) {
            console.log(error)
        }

    }



    useEffect(() => {
        if (id) {
            getEventDetail()
        }

        getUserDetail()


    }, [])
    console.log(user)

    useEffect(() => {
        if (accessTokenCookie) {
            setToken(true)
        } else {
            setToken(false)
        }

        if (userId) {
            setFormData({
                ...formData,
                id_user: userId
            })
        }

    }, [accessTokenCookie, userId])

    useEffect(() => {
        if (data.discount) {
            setFormData({
                ...formData,
                total: data.price - (data.price / 100 * data.discount)
            })
        }

    }, [data])

    console.log(data)

    const handleVoucherAndPoint = (params: string) => {
        if (params === "point") {
            if (!pointTogle){
                if (voucherClaimTogle){
                    setFormData({
                        ...formData,
                        total: (data.price - (data.price / 100 * data.discount)) - ((data.price - (data.price / 100 * data.discount)) * user.voucherClaim) - user.point
                    })
                } else {
                    setFormData({
                        ...formData,
                        total: (data.price - (data.price / 100 * data.discount)) - user.point
                    })
                }
                
            } else {
                if (!pointTogle){ 
                    setFormData({
                        ...formData,
                        total: (data.price - (data.price / 100 * data.discount))
                    })
                } else {
                    setFormData({
                        ...formData,
                        total: (data.price - (data.price / 100 * data.discount)) - ((data.price - (data.price / 100 * data.discount)) * user.voucherClaim)
                    })
                }     
            }
            setPointTogle(!pointTogle)



        } else {
            if (!voucherClaimTogle){
                if (pointTogle){
                    setFormData({
                        ...formData,
                        total: (data.price - (data.price / 100 * data.discount)) - ((data.price - (data.price / 100 * data.discount)) * user.voucherClaim) - user.point
                    })
                } else {
                    setFormData({
                        ...formData,
                        total: (data.price - (data.price / 100 * data.discount)) - ((data.price - (data.price / 100 * data.discount)) * user.voucherClaim)
                    })
                }
                
            } else {
                if (!pointTogle){ 
                    setFormData({
                        ...formData,
                        total: (data.price - (data.price / 100 * data.discount))
                    })
                } else {
                    setFormData({
                        ...formData,
                        total: (data.price - (data.price / 100 * data.discount)) - user.point
                    })
                }
            }
            setVoucherClaimTogle(!voucherClaimTogle)
        }
        
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <section className="bg-gray-900 mt-12 text-white">

                <div className="mx-auto max-w-screen-xl px-4 py-35 lg:flex lg:h-screen lg:items-center">
                    <div className="flow-root mx-auto">
                        <h1 className="bg-gradient-to-r from-green-300 mb-8 mt-10 text-center via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            {data.name}
                        </h1>
                        <dl className="-my-3 divide-gray-100 text-sm grid grid-cols-2">
                            <div className=' border-r'>
                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Category</dt>
                                    <dd className="text-white sm:col-span-2">{data.categoryName}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Quota</dt>
                                    <dd className="text-white sm:col-span-2">{data.quota} person</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Date</dt>
                                    <dd className="text-white sm:col-span-2">{moment(data.dateStart).format("DD-MMM-YYYY")} - {moment(data.dateEnd).format("DD-MMM-YYYY")}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Location</dt>
                                    <dd className="text-white sm:col-span-2">{data.location}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Bio</dt>
                                    <dd className="text-white sm:col-span-2">
                                        {data.desc}
                                    </dd>
                                </div>
                            </div>
                            
                            <div className=' ml-12'>
                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Price</dt>
                                    <dd className="text-white sm:col-span-2">Rp. {data.price}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Discount</dt>
                                    <dd className="text-white sm:col-span-2">{data.discount} %</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Voucher Claimed</dt>
                                    <dd className="text-white sm:col-span-2">
                                        {user.voucherClaim ? '10%': '-'}
                                    </dd>

                                    <label
                                        htmlFor="voucherClaimTGL"
                                        className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-500"
                                    >
                                        <input value={voucherClaimTogle} onClick={() => 
                                            handleVoucherAndPoint("voucher")
                                        } type="checkbox" id="voucherClaimTGL" className="peer sr-only" />

                                        <span
                                            className="absolute inset-y-0 left-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:left-6"
                                        ></span> 
                                    </label>
                                    <h1>{voucherClaimTogle ? 'active' : 'inactive'}</h1>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Point</dt>
                                    <dd className="text-white sm:col-span-2">
                                        {user.point}
                                    </dd>
                                    <label
                                        htmlFor="PointTGL"
                                        className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-500"
                                    >
                                        <input value={pointTogle} onClick={() => 
                                            handleVoucherAndPoint("point")
                                        } type="checkbox" id="PointTGL" className="peer sr-only" />

                                        <span
                                            className="absolute inset-y-0 left-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:left-6"
                                        ></span> 
                                    </label>
                                    <h1>{pointTogle ? 'active' : 'inactive'}</h1>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-white">Final Price</dt>
                                    <dd className="text-white sm:col-span-2">Rp. {formData.total}</dd>
                                </div>
                            </div>
                        </dl>
                        <div className="mt-8 flex flex-wrap justify-center gap-4"
                            >
                                {token &&
                                    <button
                                        onClick={() => handleBuyTicket()}
                                        className="block w-full rounded mt-5 border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                                        BUY
                                    </button>
                                }


                            </div>
                    </div>


                </div>
            </section>







            <Footer />
        </div>

    );
};

export default DetailEvent;
