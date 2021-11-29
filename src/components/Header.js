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
              <NavLink/>
              <NavLink/>
              <NavLink/>
              <NavLink/>
              <NavLogo/>
              <NavCart/>
              <NavSignIn/>
            </header>
        </>
    )
}

export default Header
