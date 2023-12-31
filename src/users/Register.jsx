import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const {user, createUser,handleupdateProfile} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password,name,photo)
    createUser(email,password)
    .then(res => {
      handleupdateProfile(name,photo)
      .then(() =>{
        toast.success('user created successfully')
        navigate('/')
      })
    })
    .catch(err => console.log(err))


    // validation
    if(password.length < 6) {
      toast.error('password should have 6 letter')
      return;
    }
   if(!/[A-Z]/.test(password)){
    toast.error("password should have atleast capital letter")
      return;
    }
   if(!/[@$!%*?&]/.test(password)){
    toast.error("password should have atleast spcial character")
    return;
   }
 }
    return (
        <div>
               <Toaster
        position="top-right"
        reverseOrder={false}
      />
       <div>
          <h1 className='text-3xl text-center'>Please Register</h1>
             <form onSubmit={handleRegister} className="card-body w-full mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <p>Already have an account? <span className='text-blue-400'><Link to="/login">Login</Link></span></p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className='mt-5'>
          <SocialLogin></SocialLogin>
        </div>
      </form>


       
            
        </div>
        </div>
    );
};

export default Register;