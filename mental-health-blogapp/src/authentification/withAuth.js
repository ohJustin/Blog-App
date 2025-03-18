import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLoggedIn, getAuthInstance } from './userAuth';

const withAuth = (Component) => {
    const AuthenticatedComponent = (props) => {
        const [loading, setLoading] = useState(true);
        const [authenticated, setAuthenticated] = useState(false);
        const navigate = useNavigate();

        useEffect(() => {
            if (userLoggedIn()) {
                setAuthenticated(true);
                setLoading(false);
            } else {
                navigate('/login');
                setLoading(false);
            }
        }, [navigate]);

        if (loading) {
            return <div>Loading...</div>; // Render a loading indicator while checking authentication
        }

        if (!authenticated) {
            return null; // Optionally render null or a different component if not authenticated
        }

        return <Component {...props} />;
    };

    return <AuthenticatedComponent />;
};

export default withAuth;