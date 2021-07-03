import './Navbar.scss';

import { NavLink } from 'react-router-dom';
import { HOME, FORM } from '../../../config/router/path';

const NavBar = () => {
    return (
        <div>
            <ul>
                <NavLink to={HOME} activeClassName="navbar__active" exact><li>Home</li></NavLink>
                <NavLink to={FORM} activeClassName="navbar__active" exact><li>Form</li></NavLink>
                
            </ul>
        </div>
    )
}
export default NavBar;