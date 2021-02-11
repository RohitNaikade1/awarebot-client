import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from './helpers/auth';

const adminInstructor = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => 
                isAuth() && (isAuth().role === 'admin' || isAuth().role === 'instructor')? 
                <Component {...props} /> : 
                <Redirect to="/" />
            }
        />
    )
}

export default adminInstructor;
