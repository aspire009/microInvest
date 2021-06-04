import './SigninSignupPallette.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { COLORS } from '../../../../constants/NewColorScheme'
import { useState } from 'react'
import { login, signup } from '../../../../utilities/AppUtil'
import { useHistory } from 'react-router-dom'
import { ACCESS_TOKEN } from '../../../../constants/app-config'

import { on } from 'events'

const SigninSignupPallette = (props: { mode: string }) => {

    const [isModeSignup, setIsModeSignup] = useState(props.mode === 'signup');
    const [userName, setUserName] = useState('');
    const [token, setToken] = useState('');
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [details, setDetails] = useState({
        name: '',
        email: '',
        password: '',
    })
    const emailRegex = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$");
    const history = useHistory();
    const onNameChange = (event: any) => {
        setUserName(event.target.value);
    }

    const onEmailChange = (event: any) => {
        setUserEmail(event.target.value);
    }

    const onPasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

    const onSubmit = () => {

        if (!emailRegex.test(userEmail)) {
            alert("Please provide valid email");
        }
        else if (password.length <= 6) {
            alert("Please provide valid password");
        }
        else if (isModeSignup && userName.length <= 5) {
            alert("Please provide valid username")
        }
        else {
            if (isModeSignup) {
                details.name = userName;
                details.email = userEmail;
                details.password = password;

                console.log(userName + " " + userEmail + " " + password);

                const signUpRequest = Object.assign({}, details);



                if (userName !== '' && userEmail !== '' && password !== '') {

                    signup(signUpRequest)
                        .then(response => {
                            history.push("/login");
                            setIsModeSignup(false);
                        }).catch(error => {
                            window.alert((error && error.message) || 'Oops! Something went wrong. Please try again!');
                        });


                }
            }
            else {
                details.email = userEmail;
                details.password = password;

                console.log(userEmail + " " + password);

                const loginRequest = Object.assign({}, details);



                if (userEmail !== '' && password !== '') {

                    login(loginRequest)
                        .then(response => {
                            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                            localStorage.setItem("userName", response.userName);
                            setToken(response.accessToken);
                            setUserName(response.userName);
                            console.log(userName);
                            history.push("/questionnaire");
                        }).catch(error => {
                            window.alert((error && error.message) || 'Oops! Something went wrong. Please try again!');
                        });
                }
            }
        }
    }

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
                <label className="signin-signup-sub-heading-log-in" style={{ color: COLORS.textWarn }} onClick={() => setIsModeSignup(!isModeSignup)}>{model.subHeadingAction}</label>
            </div>

            {isModeSignup &&
                <div className="signin-signup-field-wrapper">
                    <label className="signin-signup-field-title">UserName</label>

                    <div className="signin-signup-field-input-wrapper">
                        <input onChange={onNameChange} className="signin-signup-field-input" placeholder="5+ Characters, 1 number" type="text" required />
                    </div>
                </div>
            }

            <div className="signin-signup-field-wrapper">
                <label className="signin-signup-field-title">E-mail</label>

                <div className="signin-signup-field-input-wrapper">
                    <input onChange={onEmailChange} className="signin-signup-field-input" placeholder="name@mail.com" required />
                    <FontAwesomeIcon className="signin-signup-field-icon" icon={faAt} style={{ color: COLORS.textSecondary }} />
                </div>
            </div>

            <div className="signin-signup-field-wrapper">
                <label className="signin-signup-field-title">Password</label>

                <div className="signin-signup-field-input-wrapper">
                    <input onChange={onPasswordChange} className="signin-signup-field-input" placeholder="6+ Characters, 1 Captial letter" type="password" />
                    <FontAwesomeIcon className="signin-signup-field-icon" icon={faUnlock} style={{ color: COLORS.textSecondary }} />
                </div>
            </div>



            <label onClick={onSubmit} className="signin-signup-submit-button" style={{ backgroundColor: COLORS.orange }}>{model.submitButtonText}</label>

            <div className="signin-signup-google-button">
                <FontAwesomeIcon className="signin-signup-google-button-icon" icon={faGoogle} style={{ color: COLORS.orange }} />
                <label>{model.googleButtonText}</label>
            </div>

        </div>
    )
}

export default SigninSignupPallette