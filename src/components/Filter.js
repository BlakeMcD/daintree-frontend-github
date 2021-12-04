import React, { useState } from 'react'

function Filter( {sendStoreToParent, sendCategoryToParent, sendGenderToParent, sendSizeToParent, sendButtonSubmitToParent} ) {
    //USESTATES
    const [subcategory, setSubcategory] = useState("blonk")
    const [gender, setGender] = useState("blonk")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit runs")
        {sendButtonSubmitToParent()}
    
    }

    return (
        <>
            <p>Filter Criteria SubCategory</p>
            <form id="filter_criteria" onSubmit={handleSubmit}>
                <label> Store
                    <br/>                 
                    <select onChange={(event) => {sendStoreToParent(event.target.value)}}>
                        <option selected value="blank"></option>
                        <option value="Pact">Pact</option>
                        <option value="Patagonia">Patagonia</option>
                        <option value="Quince">Quince</option>
                        <option value="Reformation">Reformation</option>
                        <option value="Vetta">Vetta</option>
                        <option value="Tentree">Tentree</option>
                        <option value="Boden">Boden</option>
                        <option value="Summersalt">Summersalt</option>
                        <option value="Outerknown">Outerknown</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label> Subcategory
                    <br/>
                    
                    <select onChange={(event) => {sendCategoryToParent(event.target.value)}}>
                        <option selected value="blank"></option>
                        <option value="jeans">Jeans</option>
                        <option value="shirt">Shirts</option>
                        <option value="jacket">Jackets</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label> Gender
                    <br/>
                    <select onChange={(event) => {sendGenderToParent(event.target.value)}}>
                        <option selected value="blank"></option>
                        <option value="m">M</option>
                        <option value="f">F</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label> Size
                    <br/>
                    <select onChange={(event) => {sendSizeToParent(event.target.value)}}>
                        <option selected value="blank"></option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                    </select>
                </label>
            </form>   
        </>
    )
}

export default Filter
