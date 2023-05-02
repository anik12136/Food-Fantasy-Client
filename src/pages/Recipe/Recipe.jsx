import React from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>this is recipe :{id} </h2>
        </div>
    );
};

export default Recipe;