import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-100 p-5 min-h-screen flex justify-between items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center'>
               <img src="https://i.ibb.co/hLg6r0G/banner.jpg" alt="" />
               <div>
                <h2 className='text-2xl lg:text-4xl font-bold'>Technology & Electronics</h2>
                <p className='text-2xl m-5'>One stop market for all your takes needs</p>
                <p className='text-lg md:text-xl m-5'>We'll help you bring innovative technology and electronics products to the market with confidence that they meet applicable regulations and consumer demands for reliability and performance.</p>
               </div>
            </div>
            
        </div>
    );
};

export default Banner;