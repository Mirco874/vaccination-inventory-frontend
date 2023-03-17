import axios from 'axios';

export const employeesApi= axios.create(
    {
        baseURL: process.env.REACT_APP_BACKEND_URL
    }
);