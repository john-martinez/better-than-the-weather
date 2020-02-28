import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


function Header(){
    return(
        <ul className="nav">
            <Link to = "/" className="nav__link">
                <li className="nav__item">HOME<FontAwesomeIcon icon={faHome} size="2x" className ="icon-style"/></li>
            </Link>
            <Link to = "/news" className="nav__link">
                <li className="nav__item">TODAY'S NEWS<FontAwesomeIcon icon={faNewspaper} size = "2x" className ="icon-style"/></li>
            </Link>
        </ul>
    );
}

export default Header;