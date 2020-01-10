import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import './index.css';
import Countries from './components/Countries'


const App = () => {
    const [ countries, setCountries ] = useState([])
    const [ searchBar, setNewSearchBar ] = useState('')

    const hook = () => {
        console.log('effect')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
          })
      }
      useEffect(hook, [])
      
    const handleCountryChange = (event) => {
      setNewSearchBar(event.target.value)
    }

    return(
    <div>
        <form>
        find countries <input 
        value={searchBar} 
        onChange={handleCountryChange} 
        />
        </form>
        <Countries data={countries} filter={searchBar} handle={handleCountryChange} />
    </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));
