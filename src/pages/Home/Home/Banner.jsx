import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
function CarouselFadeExample() {
    return (
        <Carousel fade >
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://as2.ftcdn.net/v2/jpg/02/89/80/03/1000_F_289800335_l89vweOGANYIhKuVHRgpGh5QRwKQMsQx.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="mt-5 Banner1"
                    style={{margin:'120px',marginLeft:'-500px'}}
                    >Choice Your Favorite <span className='text-info'>Thai Food</span>
                    <br /> 
                    
                    <span>Find Best</span>  <span className='text-info'>Thai Chef</span> 
                    <br />
                     <span className='text-warning'>And</span>
                     <br />
                    Explore Special 
                    <br /> <span className='text-info'>Thai Food Recipes</span>
                     </h1>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://www.shutterstock.com/image-photo/chef-holding-frying-pan-pieces-260nw-2017789175.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 className="text-warning mb-5">Find Your Favorite Recipe</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://as1.ftcdn.net/v2/jpg/04/08/53/56/1000_F_408535615_BOA9K0TH2OSHMP5wGh49faUr6vqNbH9c.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 className="text-success-emphasis">Hair The Top Chefs</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;