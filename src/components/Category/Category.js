import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Category has news:{categoryNews.length}</h2>
         {
            categoryNews.map(news => <NewsSummeryCard
            key={news._id}
            news={news}
            ></NewsSummeryCard>)
         }
        </div>
    );
};

export default Category;