import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Chooseus from './Chooseus';
import Brand from './Brand';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaderData = useLoaderData()
    const brandData = loaderData.brand;
    console.log(brandData)
    return (
        <div className='mt-4 mb-5'>
           <Banner></Banner>

           <h3 className='mt-12 text-2xl text-center font-bold'>Our Brands</h3>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                brandData.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
            }
           </div>
           <Feature></Feature>
           <Chooseus></Chooseus>
            
        </div>
    );
};

export default Home;