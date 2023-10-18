import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AddToCart = () => {
    const loaderData = useLoaderData()
    const {name,brand,price} = loaderData
    const [product, setProduct] = useState(loaderData);

const handleDelete = id =>{
   fetch(`http://localhost:5000/cart/${id}`,{
    method: "DELETE"
   })
   .then(res => res.json())
   .then(data => {
    console.log(data)
    if(data.deletedCount > 0){
        alert("deleted successful")
        const remaing = product.filter(products => products._id !== id)
        setProduct(remaing)
    }
   })
}
   
    return (
        <div>
            <h1>{product.length}</h1>
            <div className="container overflow-x-hidden ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      
        <th>Name</th>
        <th>Brand</th>
        <th className='hidden md:block'>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {

product.map(items =>   <tr key={items._id}>
        <td>{items.name}</td>
        <td>{items.brand}</td>
        <td className='hidden md:block'>{items.price} tk</td>
        <td onClick={() => handleDelete(items._id)}>
            <button className='btn btn-error text-white'>Delete</button></td>
      </tr>)
    
      }
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AddToCart;