import React from 'react';
import Banner from './Banner';
import Chefs from '../Chefs/Chefs';
import MostFavouruteFood from '../Another sections/MostFavouruteFood';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Container>
                    <Row>
                        <Col sm={9}>
                        <Chefs></Chefs>
                        </Col>
                        <Col sm={3}>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
            <MostFavouruteFood></MostFavouruteFood>
        </div>
    );
};

export default Home;