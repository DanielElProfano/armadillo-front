import { lazy } from 'react';

import { HOME, RSS, REGISTER } from './path'; 

const Rss = lazy(() => import('../../components/views/Rss'));  //easy loading
const Home = lazy(()=> import('../../components/views/Home'));
const Register = lazy(()=> import('../../components/users/Register'));

export const routes = [ //creo un array de rutas 
    {
        path: HOME,
        component: Home
    },
    {
        path: RSS,
        component: Rss
    },
    {
        path: REGISTER,
        component: Register
    }
];