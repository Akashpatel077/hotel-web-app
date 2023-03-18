import React from 'react';
import './Akash.css';

const firstPicture = new URL('../../assets/Rectangle-5.png', import.meta.url)
const secondPicture = new URL('../../assets/Rectangle-1135.png', import.meta.url)
const image2 = new URL('../../assets/image-2.png', import.meta.url)
const image3 = new URL('../../assets/image-3.png', import.meta.url)

const Akash = () => {
    return (

        <div>
            <div className='bgElement'>
            </div>

            <div className='bgMask'>
                <img id='image2' src={image2}></img>
                <img id='image3' src={image3}></img>
            </div>
            <img id='firstPicture' src={firstPicture}></img>
            <img id='secondPicture' src={secondPicture}></img>
            <button className='btn1'>Sign in</button>
            <button className='btn2'>Register</button>
            <button className='btn3'></button>
        </div>
    );
};

export default Akash;
