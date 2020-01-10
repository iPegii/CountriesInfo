import React from 'react'
import Country from './Country'

const Countries = (countries) => {
    
    const filteredCountries = countries.data.filter(country => country.name.toUpperCase().includes(countries.filter.toUpperCase()) === true)

    const tooMuchCountries = () => {
        return(
    <p> Too many matches, specify the country </p>
    )
    }

    const simpleCountry = () => filteredCountries.map((country, indeksi) =>
    <p key={indeksi}>
    {country.name}  <button onClick={countries.handle} value={country.name}> show </button>
    </p>
    )

    const detailCountry = () => {
        const theCountry = filteredCountries[0]
        return(
    <Country
    name={theCountry.name}
    capital={theCountry.capital}
    population={theCountry.population}
    languages={theCountry.languages}
    flag={theCountry.flag}
    />
    )
    }
    if(filteredCountries.length > 10) {
        return(
        tooMuchCountries()
        )   
    } else if(filteredCountries.length === 0 || (filteredCountries.length <= 10 && filteredCountries.length > 1)) {
        return(
        simpleCountry()
        )
    } else if(filteredCountries.length === 1) {
        return(
        detailCountry()
        )
    } else {
        return(
        <p> ERROR </p>
        )
    }
}
export default Countries