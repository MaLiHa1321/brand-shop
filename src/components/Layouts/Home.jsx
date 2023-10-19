import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Chooseus from './Chooseus';
import Brand from './Brand';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaderData = useLoaderData()
    const categoreisdata = loaderData.brand
  
    console.log(loaderData)
    return (
        <div className='mt-4 mb-5'>
           <Banner></Banner>

           <h3 className='mt-12 text-2xl w-52 mx-auto p-2 rounded  font-bold m-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>Our Brands</h3>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                categoreisdata.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
            }
           </div>
           <Feature></Feature>
           <Chooseus></Chooseus>
            
        </div>
    );
};

export default Home;