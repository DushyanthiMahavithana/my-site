import React from 'react'
import BannerImage from '../Images/bannerimage3.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='homeBanner'>
     <div 
        className='header' 
        style={{backgroundImage: `url(${BannerImage})`}}>
          <div className='overlay'>
              <h1>HELLO</h1>
              <p>I'M DUSHYANTHI MAHAVITHANA</p>
          </div>
      </div>
    </div>
  )
}

export default Home


