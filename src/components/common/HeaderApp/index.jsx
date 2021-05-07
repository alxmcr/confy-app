import { useState } from 'react';
import { BrandNavApp } from '../BrandNavApp'
import { NavigationApp } from '../NavigationApp'
import styles from './HeaderApp.module.css'

export function HeaderApp() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className={styles.HeaderApp}>
            <BrandNavApp showMenu={showMenu} setShowMenu={setShowMenu} />
            <NavigationApp showMenu={showMenu} />
        </header>
    )
}