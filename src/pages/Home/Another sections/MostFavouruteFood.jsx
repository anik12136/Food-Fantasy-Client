import React from 'react';
import './MostFavouruteFood.css';

const MostFavouruteFood = () => {
    return (
        <div className=' mx-5 mt-5'>
            <h2 className='text-center mb-4 shadow p-3 mb-5 bg-body-tertiary rounded '>This week Most Favorite Food </h2>
            <section className="favorite-food-section d-flex mt-2 ">
                <div className="food-card border border-end-0 border-top-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img className='imageHeight mb-2' src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?t=st=1683220342~exp=1683220942~hmac=01387d13b5230fa28e55960e67b89572203573aa294e2b0046b1b3b7683d0d3d" alt="Food 1" />
                    <div className="p-2">
                        <p>Price: $10</p>
                        <h3>Specialty :</h3>
                        <p>Specialty  is a delicious dish packed with flavors and spices. It offers a unique combination of ingredients that will tantalize your taste buds.</p>

                    </div>

                </div>
                <div className="food-card ms-3 border border-end-0 border-top-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img className='imageHeight mb-2' src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1683220342~exp=1683220942~hmac=4abfe8e6e80433596b08514323ceb36bede31eb32a0dd9adf1d9c4cbe013792a" alt="Food 2" />
                    <div className="p-2">
                        <p>Price: $12</p>
                        <h3>Specialty :</h3>
                        <p>Specialty  is a mouthwatering dish known for its rich and creamy texture. Indulge in this delightful creation that will leave you craving for more.</p>

                    </div>
                </div>
                <div className="food-card ms-3 border border-end-0 border-top-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img className='imageHeight mb-2' src="https://img.freepik.com/free-photo/big-mac-burger-french-fries-dark-wood-board_114579-2364.jpg?w=900&t=st=1683220554~exp=1683221154~hmac=cdb7a9a5a0619cc71f1fdd4768145e12d5fc40dd9658535392785a5901aa1b1e" alt="Food 3" />
                    <div className="p-2">
                        <p>Price: $8</p>
                        <h3>Specialty :</h3>
                        <p>Specialty  is a light and refreshing option that offers a perfect balance of flavors. Experience a burst of freshness with every bite.</p>
                    </div>
                </div>
                <div className="food-card ms-3 border border-end-0 border-top-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img className='imageHeight mb-2' src="https://img.freepik.com/free-photo/front-view-rotini-pasta-plate-fork-chopped-greens-bowl-cherry-tomatoes-dark-isolated-surface_140725-62464.jpg?w=996&t=st=1683220641~exp=1683221241~hmac=ff40f785221b721aa63d0b8ab4bd549f7a4a65fca5c56d20891801e3cab63299" alt="Food 4" />
                    <div className="p-2">
                        <p >Price: $15</p>
                        <h3>Specialty :</h3>
                        <p>Specialty  is an exquisite dish that showcases the culinary expertise of our chefs. Savor the complexity of flavors and textures in this delightful creation.</p>

                    </div>
                </div>
            </section>
        </div>


    );
};

export default MostFavouruteFood;