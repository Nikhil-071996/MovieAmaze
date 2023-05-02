import React from 'react';
import { Carousel , CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import playIcon from '../Images/play-icon.png';
import IMDB from '../Images/imdb-logo.png';



function Courosel(props) {
    return (
        <div>
            <Carousel>
                <CarouselItem interval={2500} className='carousel' id='first-slide'>
                    <Link to={'/Movies/458156'}>
                    <div className="description">
                        <h1>John Wick 3 : Parabellum</h1>
                        <div className="rating">
                            <div className="imdb">
                                <img src={IMDB}/>
                                <span>86.0 / 100</span>
                            </div>
                        </div>
                        <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                        <button className="btn">
                            <img src={playIcon}/>
                            Watch trailer
                        </button>
                    </div>
                    </Link>
                </CarouselItem>

                <CarouselItem interval={2500} className='carousel' id='second-slide'>
                <Link to={'/Movies/299534'}>
                <div className="description">
                        <h1>Avengers: Endgame</h1>
                        <div className="rating">
                            <div className="imdb">
                            <img src={IMDB}/>
                                <span>84.0 / 100</span>
                            </div>
                            
                        </div>
                        <p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</p>
                        <button className="btn">
                            <img src={playIcon}/>
                            Watch trailer
                        </button>
                    </div>
                </Link>
                </CarouselItem>

                <CarouselItem interval={2500} className='carousel' id='third-slide'>
                <Link to={'/Movies/76600'}>
                    <div className="description">
                        <h1>Avatar: The Way of Water</h1>
                        <div className="rating">
                            <div className="imdb">
                                <img src={IMDB}/>
                                <span>78.0 / 100</span>
                            </div>
                            
                        </div>
                        <p>Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.</p>
                        <button className="btn">
                        <img src={playIcon}/>
                            Watch trailer
                        </button>
                    </div>
                </Link>
                </CarouselItem>
            </Carousel>
        </div>
    );
}

export default Courosel;