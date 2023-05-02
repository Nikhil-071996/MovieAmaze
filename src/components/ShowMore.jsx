import React from 'react';
import {useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import IMDB from '../Images/imdb-logo.png';
import { useParams } from 'react-router';

function ShowMore(props) {
    const [moviesList , setMoviesList] = useState([]);
    const [moviesList2 , setMoviesList2] = useState([]);
    const [genreId , setGenreId] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w1280'
    const param = useParams()


    useEffect(() => {
        fetchMovies();
        fetchMovies2();
        fetchGenre();
    },[])

    async function  fetchMovies(){
        let res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${param.movie}`)
        let data = await res.json()
        setMoviesList(data.results)
    }

    async function  fetchMovies2(){
        let res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${param.movie + 1}`)
        let data = await res.json()
        setMoviesList2(data.results)
    }

    async function  fetchGenre(){
        let res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        let data = await res.json()
        setGenreId(data.genres)
    }

    return (
        <>
        <div className="background"></div>
        <div className="movie-list">
                    <div className="movies-cards search">
                        {
                            moviesList.map(movie => {
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
                        {
                            moviesList2.map(movie => {
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
        </>
    );
}

export default ShowMore;