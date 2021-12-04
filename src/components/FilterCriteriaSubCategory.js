import React from 'react'

function FilterCriteriaSubCategory() {

    const handleSubmitSubCategory = (event) => {
        alert("Sceebly Sceebs")
        console.log("Sceebly Sceebs")
        event.preventDefault();
    }

    const handleSubmitGender = (event) => {
        alert("Geebly Geebs")
        console.log("Geebly Geebs")
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Feeebly Feeebs")
        console.log("Feeebly Feeebs")
        
    }

    return (
        <>
            <p>Filter Criteria SubCategory</p>
            <form id="filter_criteria" onSubmit={handleSubmit}>
                <label> Subcategory
                    <br/>
                    <select onChange={handleSubmitSubCategory}>
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
                    <select onChange={handleSubmitGender}>
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

