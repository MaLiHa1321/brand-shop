import React from 'react';
import { BiMessageAltDetail,BiMessageAltEdit,BiLineChart,BiLockOpen,BiMessageDots,BiPoll } from 'react-icons/bi';

const Feature = () => {
    return (
        <div className='mt-12'>
            <h3 className='text-3xl w-52 mx-auto p-2 rounded  font-bold m-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'> Our Features</h3>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='p-5'>
                <p className='text-2xl w-4 mx-auto'><BiMessageAltDetail ></BiMessageAltDetail></p>
                 <h2 className='text-xl m-4 font-bold'>Product Info</h2>
                 <p>We provide the product information of each product which can help you to choose the best product.</p>

                </div>
                <div className=' p-4'>
                <p className='text-2xl w-4 mx-auto'><BiMessageAltEdit></BiMessageAltEdit></p>
                 <h2 className='text-xl m-4 font-bold'>Accessibility</h2>
                 <p>Ensure that your website is accessible to all users, including those with disabilities.</p>

                </div>
                <div className=' p-5'>
                <p className='text-2xl w-4 mx-auto'><BiLineChart ></BiLineChart></p>
                 <h2 className='text-xl m-4 font-bold'>Analytics</h2>
                 <p>We have analytics tools to monitor site traffic, user behavior, and sales data. This will help us to make data-driven decisions.</p>

                </div>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className=' p-5'>
                <p className='text-2xl w-4 mx-auto'><BiLockOpen ></BiLockOpen></p>
                 <h2 className='text-xl m-4 font-bold'>Security</h2>
                 <p>We provide Prioritize security to protect our customer data and ensure safe transactions.</p>

                </div>
                <div className=' p-4'>
                <p className='text-2xl w-4 mx-auto'><BiMessageDots></BiMessageDots></p>
                 <h2 className='text-xl m-4 font-bold'>Live Chat Support</h2>
                 <p>We Offer live chat for our customer support or product inquiries.</p>

                </div>
                <div className=' p-5'>
                <p className='text-2xl w-4 mx-auto'><BiPoll ></BiPoll></p>
                 <h2 className='text-xl m-4 font-bold'>product recommendation</h2>
                 <p>We recommendation engine to suggest related or complementary products based on users' browsing and purchase history.</p>

                </div>
            </div>
          
            
        </div>
    );
};

export default Feature;