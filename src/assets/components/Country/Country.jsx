import React, { useState } from 'react';
import './Country.css';
const Country = ({ country,handleVisitedCountries,handleVisitedFlag }) => {
     const [visited, setVisited]=useState(false);
    //  console.log(country.area.area);
    // console.log(handleVisitedCountries);
    const handleClick=()=>{
       if(visited){
        setVisited(false)
       }
       else(
        setVisited(true)
       )
       handleVisitedCountries(country);
       
    }

    console.log(country);
    return (
        <div className={`country ${visited ?'country-visited':'country-not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.name.common} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area:{country.area.area}
                {country.area.area >100000? ' (Large)' : ' (Small)'}
            </p>
            <button className='btn' onClick={handleClick}>
                {visited?'visited':'Not visited'}
            </button>

            <button className="btn" onClick={()=>{handleVisitedFlag(country?.flags?.flags?.png)}}>
                Add Visited Flag
            </button>

        </div>
    );
};

export default Country;