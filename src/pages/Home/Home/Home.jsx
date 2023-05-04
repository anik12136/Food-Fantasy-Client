import React from 'react';
import Banner from './Banner';
import Chefs from '../Chefs/Chefs';
import MostFavouruteFood from '../Another sections/MostFavouruteFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs> 
            <MostFavouruteFood></MostFavouruteFood>
        </div>
    );
};

export default Home;