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
                    <Card.Text className="d-flex justify-content-between mt-3 align-items-center justify-content-center" style={{ fontSize: '16px' }}>
                        <p> rating:{rating}</p>

                        {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
                        <div className="ms-5">
                            <button onClick={handleClick} type="button" className="btn btn-outline-secondary">Favorite<FontAwesomeIcon className="ms-2" icon={faHeart} /></button>
                        </div>
                        <ToastContainer />
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default RecipeCard;