import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./app";
import MainPage from "./pages/mainPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1>404</h1>,
        children: [
            {
                path: '/main',
                element: <MainPage/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <RouterProvider router={router}/>
);
