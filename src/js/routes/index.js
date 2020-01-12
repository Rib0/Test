import Main from 'components/Main';

// todo exact / strict

export default [
    {
        path: '/',
        component: Main,
        exact: true,
    },
    {
        path: '/foundation',
        component: Main,
        exact: true,
    },
    {
        path: '/requests',
        component: Main,
        exact: true,
    },
    {
        path: '/workers',
        component: Main,
        exact: true,
    },
    {
        path: '/clients',
        component: Main,
        exact: true,
    },
    {
        path: '/assets',
        component: Main,
        exact: true,
    },
    {
        path: '/settings',
        component: Main,
        exact: true,
    },
];
