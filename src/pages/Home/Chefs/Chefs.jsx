import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import './Chefs.css' ;
const Chefs = () => {

  const [chefs, setChefs] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/chefs')
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.error(error))
  }, [])
  return (
    <div>
      <h2 className="all-chefs my-5">All Chefs</h2>
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