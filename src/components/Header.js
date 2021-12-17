import React from 'react'
import NavLogo from "./navigation/NavLogo";
import NavCart from "./navigation/NavCart";
import NavLogin from "./navigation/NavLogin";
import NavCreateUser from './navigation/NavCreateUser';
import { Link } from "react-router-dom"



function Header() {
    return (
        <>
            <header>
                <div className="headerBox"> 
                    <div className="headerBox__navIcon">
                        <Link to="/collection">COLLECTION</Link>
                    </div>
                    <div className="headerBox__navIcon">
                        <Link to="/stores">STORES</Link>
                    </div>
                    <div className="headerBox__navIcon">
                        <Link to="/men">MEN</Link>
                    </div>
                    <div className="headerBox__navIcon">
                        <Link to="/women">WOMEN</Link>
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
                        <NavLogin/>
                        {/* <NavCreateUser/> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
