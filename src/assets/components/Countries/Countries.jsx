import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    
    const handleVisitedCountries = (country) => {
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);

    }
    const handleVisitedFlag =(flag)=>{
        const newVisitedFlags=[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);

    }

    const countriesData = use(countriesPromise);    
    const countries = countriesData.countries;

    return (
        <div>
            <h2>In the Countries: {countries.length}</h2>
            <h3>Total visited countries: {visitedCountries.length}</h3>
            <h4>Visited Flags:{visitedFlags.length}</h4>
            <ol>
                {visitedCountries.map((country, index) => (
                    <li key={index}>{country.name.common}</li>
                ))}
            </ol>
            <div className='visited-flags'>
                {visitedFlags.map(flag=>(<img src={flag} alt="Visited Flag" />))}
            </div>

            <div className='countries' id='countries'>
                {
                    countries.map(country => (
                        <Country 
                            key={country.cca3 || country.name.common} 
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlag={handleVisitedFlag}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;