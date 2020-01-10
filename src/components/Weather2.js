
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather2 = (props) => {
  
    const [ weather, setWeather ] = useState([{}])

    const hook2 = () => {
        console.log('effect')
        if(props.capital.length > 0) {
        axios
          .get(`Weather api here ${props.capital}`)
          .then(response => {
            console.log('promise fulfilled')
            console.log(response.data.current)
            setWeather(response.data.current)
          })
      } 
    }
      useEffect(hook2, [])
console.log(weather)
    return(
        <div>
        <h3> Weather in {props.capital} </h3>
        <h4> temperature: {weather.temperature}</h4>
        {weather.weather_icons && <img
        style={{width: 100, height: 100}}
        src={weather.weather_icons[0]} alt={weather.weather_icons} />}
        <h4> wind: {weather.wind_speed} </h4>
        </div>
    )
}

export default Weather2