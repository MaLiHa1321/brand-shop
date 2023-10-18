import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phone = ({phoneData,targetBrand}) => {
    // const phonesData = useLoaderData();
    const {name,brand,photo,des,price,rating,_id} = phoneData;
    const filteredPhoneData = phoneData.filter(phone => (phone.brand === targetBrand) && (phone.type === 'Mobile'));
    console.log(phoneData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
             {filteredPhoneData?.map((phone, index) => (
        <div key={index} className="card w-78 bg-base-100 shadow-xl">
          <figure>
            <img src={phone.photo} alt={phone.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{phone.name}</h2>
            <p>{phone.des}</p>
            <p>Brand: {phone.brand}</p>
            <p>Price: {phone.price}</p>
            <p>Rating: {phone.rating}</p>
            <div className="card-actions justify-end">
           
            
                <Link to={`/updateDetails/${phone._id}`}>
         <button className="btn btn-primary">Update</button>
                </Link>
                <Link to={`/proDetails/${phone._id}`}>
         <button className="btn btn-primary">Details</button>
                </Link>
            </div>
          </div>
        </div>
 ))}

            
        </div>
    );
};

export default Phone;