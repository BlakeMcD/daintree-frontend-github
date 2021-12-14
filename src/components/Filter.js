import React from 'react'

function Filter( {sendStoreToParent, sendCategoryToParent, sendGenderToParent, sendSizeToParent, sendButtonSubmitToParent, renderStore, renderGender} ) {
    //USESTATES

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit runs")
        sendButtonSubmitToParent()
    
    }

    const displayStore = () => {
        if (renderStore === true) {
            return (
                <>
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
                </>
            )
        } 
        else {
            return null
        }
    }

    const displayGender = () => {
        if (renderGender === true) {
            return (
                <>
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
                </>
            )
        } 
        else {
            return null
        }
    }

    return (
        <>
            <h3>FILTER</h3>
            <form id="filter_criteria" onSubmit={handleSubmit}>
                {displayStore()}
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
                {displayGender()}
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
