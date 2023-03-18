import React from 'react';
import './signPage.css';

// const clouds = new URL('../../assets/clouds.png', import.meta.url)
const image3 = new URL('../../assets/image-3.png', import.meta.url)

function signPage() {
  return (
    <>
      <div className="container">
      
      <div className='bgElement' />
      <div className='bgMask'>
        {/* <img id='image2' src={clouds}></img> */}
        <img id='image3' src={image3}></img>
      </div>
      </div>
    </>
  );
}
export default signPage;
