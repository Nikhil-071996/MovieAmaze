import React from 'react';
import {AiFillFacebook , AiFillYoutube} from 'react-icons/ai' 
import {BsInstagram , BsTwitter} from 'react-icons/bs' 

function Footer(props) {
    return (
        <footer>
        <div className="social">
            <AiFillFacebook/>
            <BsInstagram/>
            <BsTwitter/>
            <AiFillYoutube/>
        </div>
        <div className="links">
            <a href="/">Conditions of Use</a>
            <a href="/">Privacy & Policy</a>
            <a href="/">Press Room</a>
        </div>
        <div className="copyright">
            <p>Developed By Nikhil Kachi</p>
        </div>
    </footer>
    );
}

export default Footer;