import React from 'react'
import FilterCriteria from './FilterCriteria'
import FilterCriteriaSubCategory from './FilterCriteriaSubCategory'

function FilterContainer() {
    return (
        <div className="filter">
            <p>FILTER CONTAINER</p>
            <FilterCriteriaSubCategory/>
            <FilterCriteria/>
            <FilterCriteria/>
            <FilterCriteria/> 
        </div>
    )
}

export default FilterContainer
