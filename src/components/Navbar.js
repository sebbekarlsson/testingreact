import React from 'react';

import { Link } from "react-router-dom";


const NavbarItems = [
    ["/", "home"],
    ["/about", "about"],
    ["/facts", "facts"]
];

const Navbar = () => (
    <nav className='nav'>
        {
            NavbarItems.map((item) => {
                return (<Link to={item[0]}>{item[1]}</Link>)
            })
        }
    </nav>
)

export default Navbar;
