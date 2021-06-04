import './SigninSignupPage.css'
import SigninSignupLeftImage from '../../../assets/images/signinSignupPage/signinSignupLeftImage.png'
import SigninSignupPallette from './SigninSignupPallette/SigninSignupPallette'
import { useState } from 'react';


const SigninSignupPage = (props: { mode: string }) => {


    return (
        <div className="signin-signup-main">
            <div className="signin-signup-left">
                <img className="signin-signup-left-image" src={SigninSignupLeftImage} />

            </div>

            <div className="signin-signup-right">
                <SigninSignupPallette mode={props.mode} />
            </div>
        </div >
    )
}

export default SigninSignupPage