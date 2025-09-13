import React, { use } from 'react';
import { AuthContext } from '../AppContext/Auth/AuthContext';
import { useLocation } from 'react-router';


const PrivateRoute = ({children}) => {

    const {user,isLoading}=use(AuthContext);
    const location=useLocation()

    if(isLoading){
        return <p>Loading....</p>
    }

    if(user && user?.email){
        return children
    }
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;