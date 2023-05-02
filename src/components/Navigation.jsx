import React from 'react';
import {useState  } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../Images/tv.png';
import searchIcon from '../Images/search-icon.png';


function Navigation(props) {

    const [input , setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
        setInput('')
    }

    return (
        <nav>
            <Link to={'/'}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <h4>MovieAmaze</h4>
                </div>
            </Link>
            <form onSubmit={submitHandler}>
                <input type="text" id="search" placeholder="What do you want to watch?" value={input} 
                    onChange={(e) => setInput(e.target.value)}
                />
                <img src={searchIcon} alt="search-icon" />
            </form>
        </nav>
    );
}

export default Navigation;