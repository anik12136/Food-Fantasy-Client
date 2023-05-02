import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import Banner from '../pages/Home/Home/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';

const Main = () => {
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