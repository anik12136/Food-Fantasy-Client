import React from 'react';
import './RecipeCard.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating';

const RecipeCard = ({ recipe }) => {
    const handleClick = () => {
        toast('Added to favorite');
    };

    const { cooking_method, description, rating, recipe_name, recipe_picture, ingredients } = recipe;
    return (
        <div className='mx-4'>

            <Card className='mb-5' style={{ width: '18rem', height: '570px' }}>
                <div>
                    <Card.Img style={{ height: '150px' }} variant="top" src={recipe_picture} />
                </div>
                <Card.Body>
                    <Card.Title>{recipe_name}</Card.Title>
                    <Card.Text style={{ fontSize: '12px' }}>
                        {description}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '10px' }}>
                        <span style={{ fontSize: '10px' }}>cooking_method:</span>{cooking_method}
                    </Card.Text>

                    <div style={{ fontSize: '12px' }}>
                        <h4 style={{ fontSize: '16px' }}>ingredients :</h4>
                        {
                            ingredients.map(item => <l key={item.resId}>,
                                {item}
                            </l>
                            )
                        }
                    </div>
                    <Card.Text className=" justify-content-between mt-3 align-items-center justify-content-center" style={{ fontSize: '16px' }}>
                        <p> rating:{rating}</p>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"></link>
                        <div className="d-flex">
                            <div className="rating text-warning">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="ms-5">
                                <button onClick={handleClick} type="button" className="btn btn-outline-secondary">Favorite<FontAwesomeIcon className="ms-2 text-danger" icon={faHeart} /></button>
                            </div>
                        </div>
                        <ToastContainer />
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default RecipeCard;