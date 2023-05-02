import React from 'react';
import {useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../Images/Chevron right.png';
import IMDB from '../Images/imdb-logo.png';


function FeaturedMovies(props) {

    const [featuredMovies , setFeaturedMovies] = useState([]);
    const [genreId , setGenreId] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w1280'

    useEffect(() => {
        fetchMovies();
        fetchGenre();
    },[])
    
    async function  fetchMovies(){
        let res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=6`)
        let data = await res.json()
        setFeaturedMovies(data.results)
        console.log(data.results[0])
    }

    async function  fetchGenre(){
        let res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        let data = await res.json()
        setGenreId(data.genres)
    }

    return (
        <div>
            <section className="featured-movies">
                <div className="title">
                    <h2>Featured Movie</h2>
                    <Link to={'/showmore/6'} >
                        <span>
                            See More 
                            <img src={Arrow} alt='Arrow' />
                        </span>
                    </Link>
                </div>
                <div className="movie-list">
                    <div className="movies-cards">
                        {
                            featuredMovies.map(movie => {
                                let  filteredGenre = genreId.filter((g) => movie.genre_ids.includes(g.id))
                                let  filteredGenreNames = filteredGenre.map((g) => g.name)
                                return(
                                    <Link to={'/Movies/' + movie.id} >
                                        <div className="card-list" key ={movie.id}>
                                            <img src={image_path + movie.poster_path} alt={movie.title}/>
                                            <div className="movie-info">
                                                <h6>Release in Year : {movie.release_date.split('-')[0]}</h6>
                                                <h5>{movie.title}</h5>
                                                <div className="imdb">
                                                    <img src={IMDB} alt='imdb'/>
                                                    <span>{movie.vote_average} / 10</span>
                                                </div>
                                                <h6>{
                                                    filteredGenreNames.join(', ')
                                                }</h6>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }      
                    </div>
                </div>
            </section>
        </div>
    );
}


export default FeaturedMovies;
