import './WelcomePage.css'
import WelcomePageBackgroundImage from '../../../assets/images/welcomePage/welcomePageBackgroundImage.png'
import Logo from '../../../assets/images/logos/logoPurple.png'
import { COLORS } from '../../../constants/NewColorScheme'

const WelcomePage = () => {


    const ssnChangeHandler = (event) => {
        //event.target.value = event.target.value.replace(/[^0-9]/, '')
        // var val = event.target.value.replace(/\D/g, '');

        // val = val.replace(/^(\d{3})/, '$1-');
        // val = val.replace(/-(\d{2})/, '-$1-');
        // val = val.replace(/(\d)-(\d{4}).*/, '$1-$2');
        // event.target.value = val;

        var val = event.target.value.replace(/\D/g, '');
        var newVal = '';
        if (val.length > 4) {
            event.target.value = val;
        }
        if ((val.length > 3) && (val.length < 6)) {
            newVal += val.substr(0, 3) + ' - ';
            val = val.substr(3);
        }
        if (val.length > 5) {
            newVal += val.substr(0, 3) + ' - ';
            newVal += val.substr(3, 2) + ' - ';
            val = val.substr(5);
        }
        newVal += val;
        event.target.value = newVal.substring(0, 15);
    }

    return (
        <div className="welcome-main" style={{ backgroundImage: `url(${WelcomePageBackgroundImage})` }}>

            <div className="welcome-header">
                <img src={Logo} className="welcome-logo" />
                <label className="welcome-logo-title" style={{ color: COLORS.textPrimary }}>SaveEasy</label>
            </div>

            <div className="welcome-content">
                <label className="welcome-content-text">Unleash the true power of</label>
                <label className="welcome-content-text">your credit cards</label>
                <label className="welcome-content-sub-text">Grow your investments just by paying your card bills</label>
            </div>

            <div className="welcome-ssn-wrapper">
                <input className="welcome-content-input-ssn" placeholder="Your SSN Number" style={{ borderBottomColor: COLORS.textPrimary }} onChange={ssnChangeHandler} />
                <label className="welcome-content-sign-up" style={{ backgroundColor: COLORS.textPrimary }}>Get Started</label>
            </div>

            <div className="welcome-signin-wrapper">
                <label className="welcome-content-sign-in-heading">Already a part of the club?</label>
                <label className="welcome-content-sign-in" style={{ color: COLORS.orange }}>Sign in</label>
            </div>

        </div>

    )
}

export default WelcomePage