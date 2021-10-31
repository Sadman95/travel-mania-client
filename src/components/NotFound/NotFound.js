import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history  = useHistory();
    return (
        <div className='w-50 mt-5 mx-auto bg-secondary text-center p-5'>
            <div>
            <h1>404</h1>
            <p>Page not found</p>
            <button onClick={() => history.push('/home')} className='btn btn-primary'>Home</button>
            </div>
        </div>
    );
};

export default NotFound;