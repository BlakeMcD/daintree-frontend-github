import React from 'react'
import Button from './Button'

function HomePageImage(props) {
    console.log(props)
    return (
        <div className="homepageImageComponent">
            <img className="homepageImageComponent__image" src={props.imageSource} alt={props.imageAlt}></img>
            <a className="button homepageImageComponent__button">{props.buttonText}</a>
        </div>
        
    )
}

export default HomePageImage
