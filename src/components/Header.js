import React from 'react'
import NavLink from "./navigation/NavLink";
import NavLogo from "./navigation/NavLogo";
import NavCart from "./navigation/NavCart";
import NavLogin from "./navigation/NavLogin";
import { Link } from "react-router-dom"



function Header() {
    return (
        <>
            <header>
                <div className="headerBox"> 
                    <div className="headerBox__navIcon">
                        {/* <NavLink text={"COLLECTION"} linkTo={"./collection"}/> */}
                        <Link to="/collection">COLLECTION</Link>
                    </div>
                    <div className="headerBox__navIcon">
                        {/* <NavLink text={"STORES"} linkTo={"./stores"}/> */}
                        <Link to="/stores">STORES</Link>
                    </div>
                    <div className="headerBox__navIcon">
                        {/* <NavLink text={"MEN"} linkTo={"./men"}/> */}
                        <Link to="/men">MEN</Link>
                    </div>
                    <div className="headerBox__navIcon">
                        {/* <NavLink text={"WOMEN"} linkTo={"./women"}/> */}
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
                        {/* NavCart and NavLInk go here*/}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
