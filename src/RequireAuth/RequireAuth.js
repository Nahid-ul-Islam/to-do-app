import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div className='my-10'>
            <div className="flex justify-center items-center">
                < div className="animate-spin rounded-full h-16 w-16 lg:h-32 lg:w-32 border-b-2 border-black"></div>
            </div>
            <h4 className='text-center text-xl fond-semibold text-black mt-5'>Loading...</h4>
        </div>
    }
    if (!user) {
        return <Navigate to="/social"></Navigate>
    }
    return children;
};

export default RequireAuth;