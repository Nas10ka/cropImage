import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
         <header>
             <nav>
                 <ul>
                     <li><Link to="/">Crop</Link></li>
                     <li><Link to="/slider">Slider</Link></li>
                 </ul>
             </nav>
         </header>
);

export default Header;