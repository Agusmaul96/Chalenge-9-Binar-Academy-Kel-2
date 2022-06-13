import React from 'react';
import Navbar from './Navbar';
import '../styles/pageone.css'
import assets from './assets/welcome.jpg';

function Header() {
    return (
        <>
            <Navbar />
            <div className='app__home app__wrapper section__padding' id='home'>
                <div className="app__wrapper_info">
                    <h1 className="app__home-h1"> PLAY TRADITIONAL GAME</h1>
                    <p className="p__sanserif" style={{ margin: '2rem 0' }}>EXPERIENCE NEW TRADITIONAL GAME</p>
                    <div type="button" className="custom__button">PLAY NOW</div>
                </div>
                <div className="app__wrapper_img">
                    <img src={assets} alt="background img" />
                </div>
            </div>

        </>

    )
};

export default Header;
