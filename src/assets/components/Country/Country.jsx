import React from 'react';
import './Country.css';
const Country = ({ country }) => {
    console.log(country);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.name.common} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area:{country.area.area}
                {country.area.area >100000? ' (Large)' : ' (Small)'}
            </p>
        </div>
    );
};

export default Country;