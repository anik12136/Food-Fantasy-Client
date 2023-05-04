import React from 'react';
import './RecipeCard.css';
import { Card } from 'react-bootstrap';
const RecipeCard = ({ recipe }) => {
    const { cooking_method, description, rating, recipe_name, recipe_picture, ingredients } = recipe;
    return (
        <div className='mx-4'>

            <Card className='mb-5' style={{ width: '18rem', height:'100%' }}>
                <Card.Img  variant="top" src={recipe_picture} />
                <Card.Body>
                    <Card.Title>{recipe_name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        cooking_method:{cooking_method}
                    </Card.Text>
                    <Card.Text>
                        rating:{rating}
                    </Card.Text>


                    <div>
                        <h4>ingredients :</h4>
                        {
                            ingredients.map (item => <p key={item.resId}>
                                {item}
                            </p>
                                
                                )
                        }
                    </div>

                </Card.Body>
            </Card>

        </div>
    );
};

export default RecipeCard;