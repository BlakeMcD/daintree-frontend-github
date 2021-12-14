import React, { useState, useEffect } from 'react'
import LogoSquareLarge from './LogoSquareLarge';

function ShopSlideshow() {


    const url = 'http://localhost:3000/api/v1/stores'

    const [brands, setBrands] = useState([]);

    useEffect( async() => {
        //fetch data
        const response = await fetch(url);
        const data = await response.json();

        //send data to state
        setBrands(data)
    }, [])

    const renderBrands = () => {
        if (brands.length === 0) {
            return (
                <p>Brands Loading</p>
            )
        }
        else {
            return (
                <div className="brandsContainer">
                    <div className="slideshowWrapper">
                            {
                                brands.map( (brand) => {
                                    return (
                                        <div className="slideshowWrapper__slide">
                                            <LogoSquareLarge imageSource={brand.logo_url_square} imageAlt={brand.name} brandName={brand.name} brandId={brand.id}/>
                                        </div>
                                    )
                                })
                            }
                        
                    </div>
                </div>  
            )
        }
    }

    return (
        <>
            {renderBrands()}
        </>
    )
}

export default ShopSlideshow
