import React from 'react';
import './Register.css';
const image2 = new URL('../../assets/image-2.png', import.meta.url)
const image3 = new URL('../../assets/image-3.png', import.meta.url)
const rectangle5 = new URL('../../assets/Rectangle-5.png', import.meta.url)
const rectangle1135 = new URL('../../assets/Rectangle-1135.png', import.meta.url)
// const overlay = new URL('../../assets/Rectangle-5', import.meta.url)

const Register = () => {
    return (
        <>
            <div className='bgElement'>
                <img id='image2' src={image2}></img>
                <img id='image3' src={image3}></img>
                <img id='rectangle5' src={rectangle5}></img>
                <img id='rectangle1135' src={rectangle1135}></img>
                <div className='overlay'></div>
            </div>
            <form>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email'/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='••••••••' />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="sign-in-btn">Sign In</button>
            </form>

            <a href='#' className='sign-btn'>Sign In</a>
            <a href='#' className='register'>Register</a>
            <a href='#' className='recover-pass'>Recover Password?</a>
            
        </>
    );
};

export default Register;