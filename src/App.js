import "./components/styles.css";
// import WeatherIcon from "./components/WeatherIcon";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(0);
  let temp = 0;
  let feeeling = 0;
  if (data.main && data.main.temp) {
    temp = Math.round(data.main.temp - 273.15);
    feeeling = Math.round(data.main.feels_like - 273.15);
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2ceba9cd491f34a96ccae5d77c54a250`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setWeather(response.data.weather[0].id);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">{data.main ? <h1>{temp}°</h1> : null}</div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{feeeling}°</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
