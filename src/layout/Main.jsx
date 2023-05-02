import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import Banner from '../pages/Home/Home/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Banner></Banner>
            <Chefs></Chefs> */}
            
            <Footer></Footer>
            
        </div>
    );
};

export default Main;