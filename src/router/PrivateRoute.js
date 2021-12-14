import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';


export const PrivateRoute = ({ children }) => {

    const { auth } = useContext(AuthContext);

    const { pathname, search } = useLocation();

    console.log(pathname, search);

    // localStorage.setItem('lastPath', pathname + search);


    return auth.logged
        ? children
        : <Navigate to="/auth/login" />
}

