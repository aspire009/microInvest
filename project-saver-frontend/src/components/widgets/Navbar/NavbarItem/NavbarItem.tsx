import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { COLORS } from '../../../../constants/NewColorScheme'
import './NavbarItem.css'

const NavbarItem = (props: { selected: boolean, icon, label }) => {
    return (
        <div className="navbar-item-main" style={{ backgroundColor: props.selected && props.label != 'Log Out' ? COLORS.navbarItemSelected : COLORS.navbar, color: props.selected ? 'white' : 'grey' }}>
            <FontAwesomeIcon icon={props.icon} className="navbar-item-icon" />
            <label className="navbar-item-label">{props.label}</label>
        </div>
    )
}

export default NavbarItem