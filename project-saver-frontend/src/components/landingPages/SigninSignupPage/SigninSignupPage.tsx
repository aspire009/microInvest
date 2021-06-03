import './SigninSignupPage.css'
import SigninSignupLeftImage from '../../../assets/images/signinSignupPage/signinSignupLeftImage.png'
import SigninSignupPallette from './SigninSignupPallette/SigninSignupPallette'


const SigninSignupPage = () => {
    return (
        <div className="signin-signup-main">
            <div className="signin-signup-left">
                <img className="signin-signup-left-image" src={SigninSignupLeftImage} />

            </div>

            <div className="signin-signup-right">
                <SigninSignupPallette mode="signup" />
            </div>
        </div >
    )
}

export default SigninSignupPage