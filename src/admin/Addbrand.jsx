import React from 'react';

const Addbrand = () => {

    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value.toLowerCase();
        const photo = form.photo.value;
        const addBrand = {name,photo}
        console.log(addBrand)

        fetch('http://localhost:5000/brands',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId ){
            form.reset()
            }
        })
    }
    return (
        <div>
                    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-xl lg:text-5xl font-bold">Add Brand</h1>
    </div>
    <div className="card flex-shrink-0 w-[200px] lg:w-full shadow-2xl bg-base-100">
      <form onSubmit={handleAdd} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">image</span>
          </label>
          <input type="text" placeholder="image" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Addbrand;