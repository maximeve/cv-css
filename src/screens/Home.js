import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
        <Navbar />
        <div className="HomeContainer">
            <div className="HomeContainer_left">
                <h2>Create an online resume with our creator tool</h2>
                <p>Export your resume as a pdf or host in online using our online service</p>
                <div className="HomeContainer_button"><Link to="/login">Sign Up</Link></div>
            </div>
            <div className="HomeContainer_right">
                <img src="./home2.png" alt="homescreen"></img>
            </div>
        </div>
        </>
    )
}

export default Home
