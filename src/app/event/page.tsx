"use client"

import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/api/apiApp';

const Event: React.FC = () => {
    const router = useRouter()

    const [data, setData] = useState<any>([]);
    const [search, setSearch] = useState<any>("");

    const getEvent = async () => {
        try {
            const result = await api.get(`/event?page=1&pageSize=10&name=${search}`)
            setData(result.data.data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getEvent()
        const accessTokenCookie = getCookie('access_token')
        if (!accessTokenCookie) {
            // router.push("/login")
        }
    }, [search])

    

    console.log(data)
    return (

        <div>
            <Navbar />

            {/* Search */}
            <form className="max-w-lg mt-32 mx-auto">
                <div className="flex">
                    <label form="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    {/* <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button> */}
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            {/* <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                            </li> */}
            
                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input 
                        type="search" 
                        id="search-dropdown" 
                        onChange={(e)=> setSearch(e.target.value)}
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Event" required />
                       
                    </div>
                </div>
            </form>

            {/* Event */}
            <div className="flex justify-center items-center px-6">
                <article className="grid grid-cols-3 my-10  gap-8">
                    {
                        data.map((item: any, index: number) =>
                            <div key={index} className="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-6 lg:p-8">
                                <div className="flex items-start sm:gap-8 border-gray-300">
                                    <div className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500" aria-hidden="true">
                                        <div className="flex items-center gap-1">
                                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                            <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                        </div>
                                    </div>

                                    <div>
                                        <Link href={`/event/${item.id}`}>

                                            <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">Detail</strong>

                                        </Link>


                                        <h3 className="mt-4 text-lg font-medium sm:text-xl"><a href="#" className="hover:underline">{item.name}</a></h3>

                                        <p className="mt-1 text-sm text-gray-700">{item.dateStart}</p>
                                        <p className="mt-1 text-sm text-gray-700">{item.dateEnd}</p>


                                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                            <div className="flex items-center gap-1 text-gray-500">
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p className="text-xs font-medium">{item.price}</p>
                                            </div>
                                            <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                                            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">{item.categoryName} &middot;</p>
                                            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }







                </article>

            </div>

            {/* pagination */}
            <div className="inline-flex justify-center mx-auto gap-1">
                <a
                    href="#"
                    className="inline-flex items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Prev Page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>

                <div>
                    <label htmlFor="PaginationPage" className="sr-only">Page</label>

                    <input
                        type="number"
                        className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        min={1}
                        defaultValue={2}
                        id="PaginationPage"
                    />
                </div>

                <a
                    href="#"
                    className="inline-flex items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default Event;
