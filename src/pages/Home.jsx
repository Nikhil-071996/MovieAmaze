import React from 'react';
import Courosel from '../components/Courosel';
import FeaturedMovies from '../components/FeaturedMovies';
import NewArrival from '../components/NewArrival';

function Home(props) {
    return (
        <div>
            <Courosel/>
            <FeaturedMovies/>
            <NewArrival/>
        </div>
    );
}

export default Home;