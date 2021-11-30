import React from 'react'
import NavLink from './NavLink'
import NavLogo from './NavLogo'
import NavCart from './NavCart'
import NavSignIn from './NavSignIn'

function Header() {
    return (
        <>
            <p>HEADER</p>
            <header>
              <NavLink text={"COLLECTION"}/>
              <NavLink text={"STORES"}/>
              <NavLink text={"MEN"}/>
              <NavLink text={"WOMEN"}/>
              <NavLogo/>
              <NavCart/>
              <NavSignIn/>
            </header>
        </>
    )
}

export default Header
