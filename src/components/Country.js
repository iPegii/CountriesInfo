import React from 'react'
import Weather2 from './Weather2'

const Country = (country) => {
    const languages = () => country.languages.map((language, index) =>
        <li key={index}> {language.name} </li>
        )

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
<Weather2 capital={country.capital} />
</div>
)
}

export default Country