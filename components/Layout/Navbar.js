import React from 'react'
import navStyles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'> HOME </Link>
                </li>
                <li>
                    <Link href='/about'> ABOUT </Link>
                </li>
            </ul>
        </nav>
    )
}
