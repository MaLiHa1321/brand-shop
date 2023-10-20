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
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="max-w-sm w-full h-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl m-3 font-bold"> {name}</h1>
      <h1 className="text-2xl m-3"> {brand} brand</h1>
      <h1 className="text-2xl m-3"> Price: {price} TK</h1>
      <p className='text-xl m-3 text-bold  text-center'>Description:{des}</p>
      <h1 className="text-2xl m-3"> Rating: {rating}</h1>

      <div onClick={handlecart}>

<button className='btn btn-primary m-5'>Add to cart</button>
</div>
    </div>
  </div>
</div>

         
          
            
        </div>
    );
};

export default ProductDetails;