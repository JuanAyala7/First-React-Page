import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './AboutMe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/about-me',
        element: <AboutMe />,
    },
]);

const test = ['sam', 'juan'];
const test1 = [1, 2];
const test2 = [[1], [2]];
const test3 = [{ sam: 'fletcher' }, { juan: 'Ayala' }];

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
