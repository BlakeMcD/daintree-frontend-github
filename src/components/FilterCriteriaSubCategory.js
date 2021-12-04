import React, { useState } from 'react'

function FilterCriteriaSubCategory() {

    //USESTATES
    const [subcategory, setSubcategory] = useState("blank")
    const [gender, setGender] = useState("blank")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(subcategory)
        console.log(gender)
    }

    return (
        <>
            <p>Filter Criteria SubCategory</p>
            <form id="filter_criteria" onSubmit={handleSubmit}>
                <label> Subcategory
                    <br/>
                    <select onChange={(event) => setSubcategory(event.target.value)}>
                        <option selected value="blank"></option>
                        <option value="jeans">Jeans</option>
                        <option value="shirts">Shirts</option>
                        <option value="jackets">Jackets</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label> Gender
                    <br/>
                    <select onChange={(event) => setGender(event.target.value)}>
                        <option selected value="blank"></option>
                        <option value="men">M</option>
                        <option value="women">F</option>
                    </select>
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>      
            </form>   
        </>
    )
}

export default FilterCriteriaSubCategory

