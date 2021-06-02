import './SigninSignupPallette.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { COLORS } from '../../../../constants/NewColorScheme'
import { useState } from 'react'

const SigninSignupPallette = (props: { mode: string }) => {

    const [isModeSignup, setIsModeSignup] = useState(props.mode == 'signup');

    const signupModel = {
        heading: 'Signup up to SaveEasy',
        subHeading: 'Already a member?',
        subHeadingAction: 'Sign In',
        submitButtonText: 'Create an Account',
        googleButtonText: 'Sign up with Google'
    }

    const signinModel = {
        heading: 'Hey, Welcome back !',
        subHeading: 'Not a member yet?',
        subHeadingAction: 'Sign Up',
        submitButtonText: 'Sign In',
        googleButtonText: 'Sign in with Google'
    }

    const model = isModeSignup ? signupModel : signinModel

    return (
        <div className="signin-signup-right-main" style={{ paddingTop: isModeSignup ? '45px' : '90px' }}>
            <label className="signin-signup-heading">{model.heading}</label>

            <div className="signin-signup-sub-heading-wrapper">
                <label className="signin-signup-sub-heading-static">{model.subHeading}</label>
                <label className="signin-signup-sub-heading-log-in" style={{ color: COLORS.orange }} onClick={() => setIsModeSignup(!isModeSignup)}>{model.subHeadingAction}</label>
            </div>

            <div className="signin-signup-field-wrapper">
                <label className="signin-signup-field-title">E-mail</label>

                <div className="signin-signup-field-input-wrapper">
                    <input className="signin-signup-field-input" placeholder="name@mail.com" />
                    <FontAwesomeIcon className="signin-signup-field-icon" icon={faAt} style={{ color: COLORS.textSecondary }} />
                </div>
            </div>

            <div className="signin-signup-field-wrapper">
                <label className="signin-signup-field-title">Password</label>

                <div className="signin-signup-field-input-wrapper">
                    <input className="signin-signup-field-input" placeholder="6+ Characters, 1 Captial letter" type="password" />
                    <FontAwesomeIcon className="signin-signup-field-icon" icon={faUnlock} style={{ color: COLORS.textSecondary }} />
                </div>
            </div>

            {isModeSignup &&
                <div className="signin-signup-field-wrapper">
                    <label className="signin-signup-field-title">Confirm Password</label>

                    <div className="signin-signup-field-input-wrapper">
                        <input className="signin-signup-field-input" placeholder="6+ Characters, 1 Captial letter" type="password" />
                        <FontAwesomeIcon className="signin-signup-field-icon" icon={faUnlock} style={{ color: COLORS.textSecondary }} />
                    </div>
                </div>
            }

            <label className="signin-signup-submit-button" style={{ backgroundColor: COLORS.textPrimary }}>{model.submitButtonText}</label>

            <div className="signin-signup-google-button">
                <FontAwesomeIcon className="signin-signup-google-button-icon" icon={faGoogle} style={{ color: COLORS.orange }} />
                <label>{model.googleButtonText}</label>
            </div>

        </div>
    )
}

export default SigninSignupPallette