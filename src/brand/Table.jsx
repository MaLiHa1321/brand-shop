import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({phoneData,targetBrand}) => {
    const {name,brand,photo,des,price,rating} = phoneData;
    const filteredPhoneData = phoneData.filter(phone => (phone.brand === targetBrand) && (phone.type === "tablet"));
    return (
        
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
             {filteredPhoneData?.map((tab, index) => (
        <div key={index} className="card w-78 bg-base-100 shadow-xl">
          <figure>
            <img src={tab.photo} alt={tab.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{tab.name}</h2>
            <p>{tab.des}</p>
            <p>Brand: {tab.brand}</p>
            <p>Price: {tab.price} TK</p>
            <p>Rating: {tab.rating}</p>
            <div className="card-actions flex-row-reverse gap-12">
            <Link to={`/updateDetails/${tab._id}`}>
         <button className="btn btn-primary">Update</button>
                </Link>
                <Link to={`/proDetails/${tab._id}`}>
         <button className="btn btn-primary">Details</button>
                </Link>
            </div>
          </div>
          </div>
         ))}
      </div>      
       
    );
};

export default Table;