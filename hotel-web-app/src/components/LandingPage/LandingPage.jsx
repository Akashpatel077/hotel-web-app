import React from 'react';
import './LandingPage.css';
const image2 = new URL('../../assets/image-2.png', import.meta.url)
const image3 = new URL('../../assets/image-3.png', import.meta.url)
const rectangle5 = new URL('../../assets/Rectangle-5.png', import.meta.url)
const rectangle1135 = new URL('../../assets/Rectangle-1135.png', import.meta.url)
// const overlay = new URL('../../assets/Rectangle-5', import.meta.url)

const LandingPage = () => {
    return (
        <>
            <div className='bgElement'>
                <img id='image2' src={image2}></img>
                <img id='image3' src={image3}></img>
                <img id='rectangle5' src={rectangle5}></img>
                <img id='rectangle1135' src={rectangle1135}></img>
                <div className='overlay'></div>
            </div>
            
            
        </>
    );
};

export default LandingPage;
