import React from 'react';
import { Link } from 'react-router-dom';

const Headphone = ({phoneData,targetBrand}) => {
    const {name,brand,photo,des,price,rating} = phoneData;
    const filteredPhoneData = phoneData.filter(phone => (phone.brand === targetBrand) && (phone.type === 'Headphone'));
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {filteredPhoneData?.map((head, index) => (
   <div key={index} className="card w-78 bg-base-100 shadow-xl">
     <figure>
       <img src={head.photo} alt={head.name} />
     </figure>
     <div className="card-body">
       <h2 className="card-title">Name: {head.name}</h2>
       <p className='text-base'>Product description: {head.des}</p>
       <p className='text base'>Brand: {head.brand}</p>
       <p className='text-base'>Price: {head.price} TK</p>
       <p className='text-base'>Rating: {head.rating}</p>
       <div className="card-actions justify-end">
       <Link to={`/updateDetails/${head._id}`}>
         <button className="btn btn-primary">Update</button>
                </Link>
                <Link to={`/proDetails/${head._id}`}>
         <button className="btn btn-primary">Details</button>
                </Link>
       </div>
     </div>
   </div>
))}

       
   </div>
    );
};

export default Headphone;