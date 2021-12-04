import React, { useState } from 'react'

function Filter( {sendCategoryToParent, sendGenderToParent, sendButtonSubmitToParent} ) {
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
                <input type="submit" value="Submit"/>      
            </form>   
        </>
    )
}

export default Filter
