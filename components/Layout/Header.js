import React from 'react'
import headerStyles from '../../styles/Header.module.css'
import Navbar from './Navbar';

export default function Header() {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Next GraphQL CRUD</span>
            </h1>
            <Navbar />
        </div>
    )
}
