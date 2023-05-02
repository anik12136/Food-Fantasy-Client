import React, { useEffect, useState } from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import Banner from '../pages/Home/Home/Banner';
import Chefs from '../pages/Home/Home/Chefs';

const Main = () => {
    const [chefs, setChefs] = useState([])

    useEffect (() =>{
        fetch('http://localhost:3000/chefs')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Chefs></Chefs>
            <Footer></Footer>
        </div>
    );
};

export default Main;