import React from 'react';
import useFavorites from '@/hooks/useFavorites';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';

const MyList = () => {
    const { data: favorites = [] } = useFavorites();

    return (
        <>
            <Navbar />

            <div className="pt-20">

                <MovieList title="My List" data={favorites} />
            </div>
        </>
    );
}

export default MyList;
