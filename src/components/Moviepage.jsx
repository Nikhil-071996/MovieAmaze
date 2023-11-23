import React from 'react';
import {useState , useEffect } from 'react';
import { useParams } from 'react-router';
import '../MovieStyle.css'

function Moviepage(props) {

    const [movieId , setMovieId] = useState({});
    const [movieDate , setMovieDate] = useState('');
    const [movieGenre , setMovieGenre] = useState([]);
    const params = useParams();
    const image_path = 'https://image.tmdb.org/t/p/w1280'

    useEffect(() => {
        fetchMovies();
    },[movieId ,params])
    
    async function  fetchMovies(){
        let res = await fetch(`https://api.themoviedb.org/3/movie/${params.name}?api_key=${process.env.REACT_APP_API_KEY}`)
        let data = await res.json()
        setMovieId(data)
        setMovieDate(data.release_date)
        setMovieGenre(data.genres)
    }
    
    return (
        <section id='movie-overlay'>
            <div className="poster">
                <img src={image_path + movieId.backdrop_path} className="loading" alt={movieId.title} />
                <div className="overlay"></div>
            </div>

            <div className="container">
                <div className="title"><h1>{movieId.title}({movieDate.split('-')[0]})</h1></div>
                <div className="row1">
                    <div className="col1">
                        <img src={image_path + movieId.poster_path} className="loading" alt={movieId.title} />
                    </div>
                    <div className="col2">
                        <div className="title2"><h2>{movieId.title}</h2><span>IMDB {movieId.vote_average}</span></div>
                        <div className="genre">
                            {(movieGenre.map((id)=> (id.name)).join(', '))}
                        </div>
                        <div className="summary">
                            <h2>Overview</h2>
                            <p>{movieId.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Moviepage;