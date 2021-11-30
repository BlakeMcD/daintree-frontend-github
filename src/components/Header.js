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
                <div className="headerBox"> 
                    <div className="headerBox__navIcon">
                        <NavLink text={"COLLECTION"}/>
                    </div>
                    <div className="headerBox__navIcon">
                        <NavLink text={"STORES"}/>
                    </div>
                    <div className="headerBox__navIcon">
                        <NavLink text={"MEN"}/>
                    </div>
                    <div className="headerBox__navIcon">
                        <NavLink text={"WOMEN"}/>
                    </div>
                </div>
                <div className="headerBox">
                    <div className="headerBox__logo">
                        <NavLogo/>
                    </div>
                </div>
                <div className="headerBox">
                    <NavCart/>
                    <NavSignIn/>
                </div>
            </header>
        </>
    )
}

export default Header
