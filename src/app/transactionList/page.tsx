"use client"

import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import Link from 'next/link';



const transactionList: React.FC = () => {

    interface Transaction {
        eventName: string;
        category: string;
        date: string;
        price: number;
        status: string;
    }


    interface TransactionHistoryProps {
        transactions: Transaction[];
    }

    return (
        <div>
            <Navbar />
            <h1 className='mt-20 text-center text-4xl font-semibold text-fuchsia-600'>Transaction History</h1>
            <div className="flex justify-center items-center px-6">

                <article className="grid grid-cols-3 my-10  gap-8">
                    {
                        <div className="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-6 lg:p-8">
                            <div className="flex items-start sm:gap-8 border-gray-300">
                                <div className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-green-500">
                                        <path fill="currentColor" d="M9 16.17l-3.17-3.17-1.42 1.41 4.59 4.59L21 7.41l-1.41-1.41L8.59 14.75z" />
                                    </svg>

                                </div>

                                <div>
                                    <h3 className="text-lg font-medium sm:text-xl"><a href="#" className="hover:underline">Dewa 19</a></h3>

                                    <p className="mt-1 text-sm text-gray-700">"#"</p>
                                    <p className="mt-1 text-sm text-gray-700">"#"</p>


                                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                        <div className="flex items-center gap-1 text-gray-500">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <p className="text-xs font-medium">"#"</p>
                                        </div>
                                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                                        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">"#" &middot;</p>
                                        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">"#"</p>
                                    </div>
                                    <Link href="#">
                                        <strong className="rounded border border-green-500 bg-green-500 px-3 py-1.5 text-[10px] font-medium text-white">Lunas</strong>

                                    </Link>
                                </div>
                            </div>
                        </div>



                    }







                </article>

            </div>
            <Footer />
        </div>



    );
}

export default transactionList;
