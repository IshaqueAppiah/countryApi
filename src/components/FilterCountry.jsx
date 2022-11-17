import React from 'react'

const FilterCountry = ({onSelect}) => {
    const handleSelect=(e)=>{
            const regionName =e.target.value
            onSelect(regionName)
    }

  return (
    <div className="select">
    <select onChange={handleSelect}>
        <option className='hide'>Filter by Region</option>
        <option  value="Africa">Africa</option>
        <option  value="Americas">America</option>
        <option  value="Asia">Asia</option>
        <option  value="Europe">Europe</option>
        <option  value="Oceania">Oceania</option>
        <option className='hide'>hide</option>
    </select>
    </div>
  )
}

export default FilterCountry