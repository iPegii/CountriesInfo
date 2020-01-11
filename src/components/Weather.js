
import React from 'react'

const Weather = ({weather}) => {
  if(weather === null) {
    return null
  }
  if(weather === undefined) {
    return null;
  }
    return(
        <div>
        <h3> Weather in {weather.location.name} </h3>
        <h4> temperature: {weather.current.temperature}</h4>
        {weather.current.weather_icons && <img
        style={{width: 100, height: 100}}
        src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} />}
        <h4> wind: {weather.current.wind_speed} </h4>
        </div>
    )
}

export default Weather