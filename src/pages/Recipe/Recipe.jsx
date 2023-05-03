import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import './Recipe.css';

const Recipe = () => {
    // const {id} = useParams();
    const chef = useLoaderData();
    console.log(chef);
    const recipes = chef.recipes;
    console.log(recipes)

    return (
        <div>
            <div className='d-flex background-recipe  align-items-center '>
                <img className='rounded-circle h-50 w-30' src={chef.chef_picture} alt="" />

                <div className='text-white ms-5 recipe-banner-text'>

                    <h2>{chef.chef_name}</h2>
                    <p>{chef.description} </p>
                    <p>Number of recipes : {chef.recipes.length}</p>
                    <div className='d-flex'>
                        <p>Years of experience :{chef.years_of_experience} </p>
                        <div className='d-flex ms-5'>
                            <p>Likes : </p>
                            {chef.likes}
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='mt-5 mb-4 d-flex aline-items-center justify-content-center '>recipes</h2>
            <div className='d-flex aline-items-center justify-content-center '>
                
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.resId}
                        recipe={recipe}
                    ></RecipeCard>
                    )
                }
            </div>
        </div>
    );
};

export default Recipe;