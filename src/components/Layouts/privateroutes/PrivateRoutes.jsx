import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)


    if( loading){
        return <h2 className='text-2xl'>Loading....</h2>
    }
    if(!user?.email){
       return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;