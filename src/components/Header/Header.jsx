import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
function Header(){
    return(
        <ul className="nav">
            <li className="nav__item"><FontAwesomeIcon icon={faTrashAlt}/></li>
            <li className="nav__item">News</li>
        </ul>
    );
}

export default Header;