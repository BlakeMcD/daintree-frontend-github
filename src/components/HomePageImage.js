import React from 'react'
import Button from './Button'

function HomePageImage(props) {
    console.log(props)
    return (
        <>  
            <img className="HomepageLargeImage" src={props.imageSource} alt={props.imageAlt}></img>
            <Button/>
        </>
    )
}

export default HomePageImage
