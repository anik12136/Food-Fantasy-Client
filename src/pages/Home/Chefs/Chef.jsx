import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';


const Chef = ({ chef }) => {
    const { id, chef_name, chef_picture, recipes, likes, years_of_experience } = chef;
    return (
        <div>
            <Card className='g-col-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>

                    <p>Numbers of recipes : {recipes.length}</p>
                    <p>Years of experience : {years_of_experience}</p>
                    <p> <FaHeart></FaHeart> {likes}</p>
                    <Link to={`/recipe/${chef.id}`}><Button className="btn-secondary" variant="primary">View recipe</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;