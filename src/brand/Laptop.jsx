import React from 'react';
import { Link } from 'react-router-dom';

const Laptop = ({phoneData,targetBrand}) => {
    const {name,brand,photo,des,price,rating} = phoneData;
    const filteredPhoneData = phoneData.filter(phone => (phone.brand === targetBrand) && (phone.type === 'Laptop'));
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
             {filteredPhoneData?.map((laptop, index) => (
        <div key={index} className="card w-78 bg-base-100 shadow-xl">
          <figure>
            <img src={laptop.photo} alt={laptop.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {laptop.name}</h2>
            <p className='text-base'> {laptop.des}</p>
            <p className='text-base'>Brand: {laptop.brand}</p>
            <p className='text-base'>Price: {laptop.price}</p>
            <p className='text-base'>Rating: {laptop.rating}</p>
            <div className="card-actions justify-end">
            <Link to={`/updateDetails/${laptop._id}`}>
         <button className="btn btn-primary">Update</button>
                </Link>
                <Link to={`/proDetails/${laptop._id}`}>
         <button className="btn btn-primary">Details</button>
                </Link>
            </div>
          </div>
        </div>
 ))}

            
        </div>
            
        </div>
    );
};

export default Laptop;