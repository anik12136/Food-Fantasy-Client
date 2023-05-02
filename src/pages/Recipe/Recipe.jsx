import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipe = () => {
    // const {id} = useParams();
    const chef = useLoaderData();
    console.log(chef);
    return (
        <div>
            <h2>numbers of recipes :{chef.recipes.length} </h2>
        </div>
    );
};

export default Recipe;