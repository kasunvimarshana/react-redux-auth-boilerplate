import React from 'react';
import './AuthLayout.css';
import authSvg from '../images/auth-svg.svg';

const AuthLayout = (props) =>{
    return(
        <div className="auth">

            <div className="auth-left">
                <p className="slug">React, Redux, JWT<br /> Authentication Boilerplate</p>
                <img src={authSvg}/>
                <p className="credit">all rights reserved &#169; <a href="https://www.teachmeit.lk" target="blank" className="teachmeit-link">teachmeit.lk</a> 2021 | <a href="#" target="blank">privacy policy</a> | <a href="#" target="blank">Terms & Conditions</a></p>
            </div>

            <div className="auth-right">
                {props.children}
            </div>
        </div>
    );
}

export default AuthLayout;