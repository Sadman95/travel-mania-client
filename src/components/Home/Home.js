import React from 'react';
import About from '../About/About';
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
        </div>
    );
};

export default Home;