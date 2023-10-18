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

        fetch('https://brand-shop-server-o4gdoreou-maliha-khans-projects.vercel.app/cart',{
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
           <img className='text-center w-[300px] mx-auto h-[300px]' src={photo} alt="" />
           <h2 className='text-2xl text-bold text-center'>Name: {name}</h2>
           <h2 className='text-2xl text-bold  text-center'>Brand:{brand}</h2>
           <p className='text-2xl text-bold  text-center'>Price:{price} TK</p>
           <p className='text-xl text-bold  text-center'>Description:{des}</p>
           <p className='text-2xl text-bold  text-center'>Rating: {rating}</p>
          <div onClick={handlecart}>

           <button className='btn btn-primary m-5'>Add to cart</button>
          </div>
          
            
        </div>
    );
};

export default ProductDetails;