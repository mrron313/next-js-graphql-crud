import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import styles from '../../styles/Layout.module.css'

export default function Layout({children}) {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    {children}
                </main>            
            </div>
        </React.Fragment>
    )
}
