import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';


export { PrivateRoute }



const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
       return <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    }

    if(user){
        return children ;
    }
    else{
        return <Navigate to="/login" state={{ from:location }} replace />
    }

};

