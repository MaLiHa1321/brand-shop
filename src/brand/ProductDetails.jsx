import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetails = () => {
    const product = useLoaderData();
    const {name,brand,photo,des,price,rating,_id} = product;

    const handlecart = () =>{
        const cartItem ={
     name: product.name,
    brand: product.brand,
    price: product.price,
        }
        console.log(cartItem)

        fetch('http://localhost:5000/cart',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('product added successful')
            }
        })

    }
    
    return (
        <div>
              <Toaster
        position="top-right"
        reverseOrder={false}
      />
           <img src={photo} alt="" />
           <h2 className='text-2xl text-bold'>{name}</h2>
           <h2 className='text-2xl text-bold'>{brand}</h2>
           <p className='text-2xl text-bold'>{price}</p>
           <p className='text-xl'>{des}</p>
           <p className='text-2xl text-bold'>Rating: {rating}</p>
          <div onClick={handlecart}>

           <button className='btn btn-primary'>Add to cart</button>
          </div>
          
            
        </div>
    );
};

export default ProductDetails;