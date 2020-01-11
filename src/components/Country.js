import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import axios from 'axios'

const Country = (country) => {

    const [ weather, setWeather ] = useState(null)
    const languages = () => country.languages.map((language, index) =>
        <li key={index}> {language.name} </li>
        )

    useEffect(() => {
        if(country.capital.length > 0) {
        axios
          .get(`Weather API goes here ${country.capital}`)
          .then(response => {
            console.log(response.data)
            if(response.data.current !== undefined) {
                setWeather(response.data)
            }
          })
      } 
    }, [country.capital])

return(
<div>
<h2> {country.name} </h2>
<p> capital {country.capital} </p>
<p> population {country.population} </p>
<h3> languages </h3>
{languages()}
<img
style={{width: 150, height: 100}}
src={country.flag} alt={`Flag of ${country.name}`} />
<Weather weather={weather} />
</div>
)
}

export default Country