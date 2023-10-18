import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const UpdateDetalis = () => {
    const product = useLoaderData();
    const [type, setType] = useState(''); // State for the selected type
    const types = ['Laptop', 'tablet', 'Mobile', 'Headphone'];
    const {name,brand,photo,des,price,rating,_id} = product;


    const handleaAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value.toLowerCase();
        const photo = form.photo.value;
        const type = form.type.value;
        const des = form.des.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const updatedProduct ={name,brand,photo,type,des,price,rating}
        console.log(updatedProduct)

        fetch(`http://localhost:5000/phones/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify(updatedProduct),
      })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.modifiedCount)
          toast.success("updated successful")
        })
    }



    const handleTypeChange = (event) => {
      setType(event.target.value);
    };
    return (
        <div>
              <Toaster
        position="top-right"
        reverseOrder={false}
      />
            <h2>update product: {name}</h2>
            <div>
                <form onSubmit={handleaAdd} >
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="name" name="name" defaultValue={name} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand name</span>
          </label>
          <input type="text" placeholder="brand name" name="brand" defaultValue={brand} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image url</span>
          </label>
          <input type="text" placeholder="image url" name="photo" defaultValue={photo} className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Types</span>
            </label>
            <select
              value={type}
              onChange={handleTypeChange}
              className="input input-bordered"
              name="type"
              defaultValue={type}
              required
            >
              <option value="" disabled>
                Select a type
              </option>
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="price" name="price" defaultValue={price} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea placeholder="description" type="text" name='des' defaultValue={des} className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="rating" name="rating" defaultValue={rating} className="input input-bordered" required />
        </div>
        <div className="form-control m-6">
          <button className="btn btn-primary">submit</button>
        </div>
                </form>
             </div>
            
        </div>
    );
};

export default UpdateDetalis;