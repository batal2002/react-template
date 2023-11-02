import React, {Suspense} from 'react';
import './index.scss'
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

const App = () => {
    return (
        <div>
            <header>
                <h1>APP</h1>
                <Link to={'/main'}>MAIN</Link>
                <Link to={'/'}>HOME</Link>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export default App;