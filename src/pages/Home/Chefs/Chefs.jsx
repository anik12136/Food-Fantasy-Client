import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import './Chefs.css' ;
const Chefs = () => {

  const [chefs, setChefs] = useState([])

  useEffect(() => {
    fetch('https://server-firebase-assignment-10-anik12136.vercel.app/chefs')
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.error(error))
  }, [])
  return (
    <div>
      <h2 className="all-chefs my-5 text-center mb-4 shadow p-3 mb-5 bg-body-tertiary rounded ">All Chefs</h2>
      <div className="grid-container">
        {
          chefs.map(chef => <Chef 
            key={chef.id}
            chef={chef}
          ></Chef>)
        }
      </div>
    </div>
  );
};

export default Chefs;