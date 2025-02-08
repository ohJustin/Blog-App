import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLoggedIn } from './userAuth';

const withAuth = (Component) => {
    const AuthenticatedComponent = (props) => {
        const [loading, setLoading] = useState(true);
        const [authenticated, setAuthenticated] = useState(false);
        const navigate = useNavigate();

        useEffect(() => {
            if (userLoggedIn()) {
                setAuthenticated(true);
                setLoading(false);
            } else{
                navigate('/login');
                setLoading(false);
            }
        }, [navigate]);
        if (loading){
            return <h1>Loading...<CircularProgress /></h1>;
        }

        if (!authenticated){
            return null;
        }

        return <Component {...props} />;
    };
    
    return AuthenticatedComponent;
};

export default withAuth;