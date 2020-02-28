import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';



function Header(){
    return(
        <ul className="nav">
            <li className="nav__item">HOME<FontAwesomeIcon icon={faHome} size="6x" className ="icon-style"/></li>
            <li className="nav__item">TODAY'S NEWS<FontAwesomeIcon icon={faNewspaper} size = "6x" className ="icon-style"/></li>
        </ul>
    );
}

export default Header;