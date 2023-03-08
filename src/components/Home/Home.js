import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allnews = useLoaderData()
    return (
        <div>
        {
            allnews.map( news =>
            <NewsSummeryCard
            key={news._id}
            news={news}
            >

            </NewsSummeryCard>)
        }
            
        </div>
    );
};

export default Home;