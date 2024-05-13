// import Link from 'next/link';
// import React from 'react';
// import Footer from '../footer/page';
// import Navbar from '../navbar/page';
// // Asumsikan Button komponen telah dibuat sebelumnya

// interface EventDetailProps {
//     title: string;
//     category: string;
//     dateTime: string;
//     location: string;
//     description: string;
// }

// const DetailEvent: React.FC<EventDetailProps> = ({ title, category, dateTime, location, description }) => {
//     const handleBuyTicket = () => {
//         // Logika pembelian tiket
//         console.log('Tombol beli tiket ditekan');
//     };

//     return (
//         <div className='h-screen'>
//             <Navbar />
//             <section className="bg-gray-900 text-white">



//                 <div className="mx-auto max-w-screen-xl px-4 py-35 lg:flex lg:h-screen lg:items-center">
                    
//                     <div className="flow-root">
//                     <h1 className="bg-gradient-to-r from-green-300 mb-8 mt-10 text-center via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
//                             Dewa 19
//                         </h1>
//                         <dl className="-my-3 divide-y divide-gray-100 text-sm">
//                             <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                                 <dt className="font-medium text-white">Category</dt>
//                                 <dd className="text-white sm:col-span-2">Music</dd>
//                             </div>

//                             <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                                 <dt className="font-medium text-white">Artist</dt>
//                                 <dd className="text-white sm:col-span-2">Dewa 19</dd>
//                             </div>

//                             <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                                 <dt className="font-medium text-white">Date</dt>
//                                 <dd className="text-white sm:col-span-2">JUNE, 20-12-2024</dd>
//                             </div>

//                             <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                                 <dt className="font-medium text-white">Salary</dt>
//                                 <dd className="text-white sm:col-span-2">Rp. 300.000</dd>
//                             </div>

//                             <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                                 <dt className="font-medium text-white">Quota</dt>
//                                 <dd className="text-white sm:col-span-2">30 Person</dd>
//                             </div>

//                             <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
//                                 <dt className="font-medium text-white">Bio</dt>
//                                 <dd className="text-white sm:col-span-2">
//                                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
//                                     doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
//                                     aspernatur neque molestiae labore aliquam soluta architecto?
//                                 </dd>
//                             </div>
//                             <div className="mt-8 flex flex-wrap justify-center gap-4">
//                             <Link
//                                 href="/transaction"
//                                 className="block w-full rounded mt-5 border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
//                                 BUY
//                             </Link>

//                         </div>
//                         </dl>
//                     </div>

                    
//                 </div>
//             </section>







//             <Footer />
//         </div>
//     );
// };

// export default DetailEvent;
