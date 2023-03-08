import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='sticky-top'>
            <h3>All News Categories</h3>
          {
            categories.map(categorie=><p
            key={categorie.id}>

                 <Link to={`/category/${categorie.id}`}>{categorie.name}</Link>
            </p>)
          }
            
        </div>
    );
};

export default LeftNav;