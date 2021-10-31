import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {

    const {user, isLoading} = useAuth();

    if(isLoading){
        return <div className='preloader'>
            <img style={{height: '100%', width: '100%'}} src='https://i.ibb.co/K6tsDXD/16e83113765711-56277d220a938.gif' alt="preloader" />
        </div>
    }

    return (
        <Route
        {...rest}
        render = {({location}) =>
        user.email ? 
        children :
        <Redirect
            to={
                {
                    pathname: '/register',
                    state: {from : location}
                }
            }
        >

        </Redirect>

        }
        >

        </Route>
    );
};

export default PrivateRoute;