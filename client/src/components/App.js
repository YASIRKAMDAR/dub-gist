import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Results from './Results';
import Search from './Search';
import Loading from './Loading';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header />
                <Loading />
                <div className="container">
                    <Route exact  path="/" component={Search} />
                    <Route path="/" component={Results} />
                </div>
                
            </div>
            </BrowserRouter>
        </div>
    )
};

export default App;