'use client'
import "./navbar.css";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the state
    };

    return(
        <nav>
            <button className='burger' onClick={toggleMenu}>&#9776;</button>
            <menu className={menuOpen ? "active" : ""}>
                <li>
                    <Link href='/' onClick={toggleMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/about' onClick={toggleMenu}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/staff' onClick={toggleMenu}>
                        Staff
                    </Link>
                </li>
                <li>
                    <Link href='/students' onClick={toggleMenu}>
                        Students
                    </Link>
                </li>
            </menu>
        </nav>
    );
}

export default Navbar;