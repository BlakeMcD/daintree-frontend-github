import React from 'react'
import { Link } from 'react-router-dom'

function NavLink(props) {
    return (
        <Link to={props.linkTo}>
            <p>{props.text}</p>
        </Link>
    )
}

export default NavLink
