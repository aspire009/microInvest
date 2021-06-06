import NavbarItem from "./NavbarItem/NavbarItem"
import { faChartLine, faTachometerAlt, faArrowCircleRight, faTools, faList, faSignOutAlt, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../../../constants/NewColorScheme"
import './Navbar.css'
import LogoPurple from '../../../assets/images/logos/logoNavbar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = (props: { page: string }) => {


    return (
        <div className="navbar-main" style={{ backgroundColor: COLORS.navbar }}>
            <div className="navbar-main-main">
                <div className="navbar-logo-wrapper">
                    <img src={LogoPurple} className="navbar-logo"></img>
                    <label className="navbar-logo-label">SaveEasy</label>

                </div>
                <NavbarItem selected={props.page == 'dashboard'} label="Dashboard" icon={faChartPie} goTo="/newDashboard"></NavbarItem>
                <NavbarItem selected={props.page == 'payments'} label="Payments" icon={faList} goTo="/portfolio"></NavbarItem>
                <NavbarItem selected={props.page == 'portfolio'} label="Portfolio" icon={faChartLine} goTo="/portfolio"></NavbarItem>
                <NavbarItem selected={props.page == 'risk'} label="Risk Profile" icon={faTachometerAlt} goTo="/portfolio/table"></NavbarItem>
                <div className="navbar-logout">
                    <NavbarItem selected={true} label="Log Out" icon={faSignOutAlt} goTo="/home"></NavbarItem>
                </div>
                <div>
                    <div className="navbar-credits"><FontAwesomeIcon className="trans-hist-container-expand" icon={faTools} style={{ color: 'orange', fontSize: '17px', padding: '8px' }} /> at HUEx</div>
                </div>

            </div>
            <div className="navbar-extra">

            </div>
        </div>
    )
}

export default Navbar