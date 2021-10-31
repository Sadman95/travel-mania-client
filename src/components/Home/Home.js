import React from 'react';
import About from '../About/About';
import Guides from '../Guides/Guides';
import Header from '../Header/Header';
import Places from '../Places/Places';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Places></Places>
            <Subscribe></Subscribe>
            <Guides></Guides>
        </div>
    );
};

export default Home;