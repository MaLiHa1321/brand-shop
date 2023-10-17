import React from 'react';

const Brand = () => {
    return (
        <div>
            <h3 className='mt-12 text-2xl text-center font-bold'>Our Brands</h3>
            <div className='flex flex-col lg:flex-row justify-around'>
                <div>
                    <img className='w-[250px] h-[280px] m-4' src="https://i.ibb.co/cxLpLH7/apple.jpg" alt="" />
                    <h2 className='text-3xl font-bold'>Apple</h2>
                </div>
                <div>
                    <img className='w-[250px] h-[280px] m-4' src="https://i.ibb.co/SBpvCT9/samsung.png" alt="" />
                    <h2 className='text-3xl font-bold'>Samsung</h2>
                </div>
                <div>
                <img className='w-[250px] h-[280px] m-4' src="https://i.ibb.co/gmNctL1/sony.png" alt="" />
                    <h2 className='text-3xl font-bold'>Sony</h2>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-12 justify-around'>
                <div>
                    <img className='w-[250px] h-[280px] m-4' src="https://i.ibb.co/qg4rMZH/intel.png" alt="" />
                    <h2 className='text-3xl font-bold'>Intel</h2>
                </div>
                <div>
                    <img className='w-[250px] h-[280px] m-4' src="https://i.ibb.co/h9dsn80/google.png" alt="" />
                    <h2 className='text-3xl font-bold'>Google</h2>
                </div>
                <div>
                <img className='w-[250px] h-[280px] m-4' src="https://i.ibb.co/8BV2NL6/walton.png" alt="" />
                    <h2 className='text-3xl font-bold'>Walton</h2>
                </div>
            </div>

            
        </div>
    );
};

export default Brand;