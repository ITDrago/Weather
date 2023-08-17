import React, { useState } from 'react'
import '../../App.css'
import WeatherService from '../../API/WeatherService'

const MyInputForm = () => {

    const [searchValue, setSearchValue] = useState('')
    const [response , setResponse] = useState() 
    async function  getWeather(e) {
        e.preventDefault()
        const weather =  await WeatherService.getWeather(searchValue)
        setResponse(weather)
        setSearchValue('')
    }

  return (
    <div>
      <div className="search-container">
              <input type="text" placeholder="Enter your city..."className="search-input"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <button  className="search-button" onClick={(e)=> getWeather(e)} type="submit">Search</button>
      </div>
          {response && (
              <div class="container">
                  <div class="row">
                      <label for="location">Location:</label>
                      <div id="location" class="data-box">{response.name}</div>
                  </div>
                  <div class="row">
                      <label for="temperature">Temperature:</label>
                      <div id="temperature" class="data-box">{response.main.temp}°</div>
                  </div>
                  <div class="row">
                      <label for="humidity"> Humidity:</label>
                      <div id="humidity" class="data-box">{response.main.humidity}%</div>
                  </div>
                  <div class="row">
                      <label for="pressure">Pressure:</label>
                      <div id="pressure" class="data-box">{response.main.pressure}</div>
                  </div>
                  <div class="row">
                      <label for="sunset">Sunset:</label>
                    
                      <div id="sunset" class="data-box">{response.sys.sunset}</div>
              </div>
            </div>
          )}
    </div>
    
  )
}

export default MyInputForm