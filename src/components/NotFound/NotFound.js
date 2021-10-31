import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history  = useHistory();
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <button onClick={() => history.push('/home')} className='btn btn-primary'>Home</button>
        </div>
    );
};

export default NotFound;