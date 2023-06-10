import React from 'react'
import logo from './img/logo.png';

function LoadingScreen() {
  return (
    <>
    <div className="App-header" >
        <div  className='appLogo'> 
        <img className='logo' src={logo} alt="logo" />
        <div>
        <p className='title' >NFTConnects</p>
        <p className='tagLine' >A World of Digital Collectibles.</p>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default LoadingScreen