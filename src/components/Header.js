import React from 'react'
import NavLink from './NavLink'
import NavLogo from './NavLogo'
import NavCart from './NavCart'
import NavSignIn from './NavSignIn'

function Header() {
    return (
        <>
            <header>
                <div className="headerBox"> 
                    <div className="headerBox__navIcon">
                        <NavLink text={"COLLECTION"} linkTo={"./collection"}/>
                    </div>
                    <div className="headerBox__navIcon">
                        <NavLink text={"STORES"} linkTo={"./stores"}/>
                    </div>
                    <div className="headerBox__navIcon">
                        <NavLink text={"MEN"} linkTo={"./men"}/>
                    </div>
                    <div className="headerBox__navIcon">
                        <NavLink text={"WOMEN"} linkTo={"./women"}/>
                    </div>
                </div>
                <div className="headerBox">
                    <div className="headerBox__logo">
                        <NavLogo/>
                    </div>
                </div>
                <div className="headerBox">
                    <div className="headerBox__userLinks">
                        <NavCart/>
                        <NavSignIn/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
