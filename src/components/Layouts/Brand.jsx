import React from 'react';
import { Link } from 'react-router-dom';


const Brand = ({brand}) => {

    const {brand_name,brand_image,id} = brand
   
    // const {name,photo,_id} = brand

    return (
        <div>
          <Link to={`/brand/${id}`}>
           <div>

           <div className="card w-78  image-full">
  <figure className='w-full h-full'><img className='w-full h-full' src={brand_image}  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{brand_name}</h2>
 
  </div>
</div>
           {/* <img className='w-[250px] h-[280px] m-4' src={brand_image} alt="" />
           <h2 className='text-3xl font-bold'>{brand_name}</h2> */}
           </div>
          </Link>
         

      
            
     </div>
    );
};

export default Brand;