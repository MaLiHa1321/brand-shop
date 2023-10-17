import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Chooseus from './Chooseus';
import Brand from './Brand';

const Home = () => {
    return (
        <div className='mt-4 mb-5'>
           <Banner></Banner>
           <Brand></Brand>
           <Feature></Feature>
           <Chooseus></Chooseus>
            
        </div>
    );
};

export default Home;