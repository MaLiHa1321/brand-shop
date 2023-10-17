import React, { useState } from 'react';

const Addproduct = () => {

    const [type, setType] = useState(''); // State for the selected type
    const types = ['Laptop', 'tablet', 'Mobile', 'Headphone']; // Array of type options
  
    const handleaAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const des = form.des.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const product ={name,brand,photo,type,des,price,rating}
        console.log(product)
    }



    const handleTypeChange = (event) => {
      setType(event.target.value);
    };
    return (
        <div>
            <h2>add product</h2>
             <div>
                <form onSubmit={handleaAdd} >
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand name</span>
          </label>
          <input type="text" placeholder="brand name" name="brand" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image url</span>
          </label>
          <input type="text" placeholder="image url" name="photo" className="input input-bordered" required />
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
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Types</span>
          </label>
          <input type="text" placeholder="types" name="photo" className="input input-bordered" required />

        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="price" name="price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea placeholder="description" type="text" name='des' className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
        </div>
        <div className="form-control m-6">
          <button className="btn btn-primary">add product</button>
        </div>
                </form>
             </div>
            
        </div>
    );
};

export default Addproduct;