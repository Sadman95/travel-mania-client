import React from 'react';
import About from '../About/About';
import Guides from '../Guides/Guides';
import Header from '../Header/Header';
import Places from '../Places/Places';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Shared/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Places></Places>
            <Subscribe></Subscribe>
            <Guides></Guides>
            <Footer></Footer>
        </div>
    );
};

export default Home;