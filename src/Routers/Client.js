import React from 'react';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';

const Client =  [
    {
        path: "/",
        exact: true,
        main: () => <Home/>
    }, {
        path: '*',
        main: () => <NotFoundPage />
    },
]

export default Client
