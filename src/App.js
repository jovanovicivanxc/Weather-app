import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import DetailedData from './components/DetailedData';
import WeekForecast from './components/WeekForecast';

const api_key = "53ef50b153144d289e1dc4cfc7676cf9";

class App extends React.Component {
  state = {
    currTemp: undefined,
    weatherDescription: "",
    humidity: undefined,
    dewPt: undefined,
    uvIndex: undefined,
    visibility: undefined,
    city: undefined,
    temp1: undefined,
    temp2: undefined,
    temp3: undefined,
    temp4: undefined,
    temp5: undefined,
    temp6: undefined,
    temp7: undefined,
    weatherDescription1: undefined,
    weatherDescription2: undefined,
    weatherDescription3: undefined,
    weatherDescription4: undefined,
    weatherDescription5: undefined,
    weatherDescription6: undefined,
    weatherDescription7: undefined,

     }
     
  getWeather = async () => {
    
    const city = "Belgrade,RS";
    const api_call = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${api_key}`);
    const data = await api_call.json();
    console.log(data.data[0]);
    this.setState ({
      currTemp: data.data[0].temp,
      weatherDescription: data.data[0].weather.description,
      humidity: data.data[0].rh,
      dewPt: data.data[0].dewpt,
      uvIndex: data.data[0].uv.toFixed(0),
      visibility: data.data[0].vis,
      city: data.data[0].city_name,
        }) ;
    
    }
    
    getWeatherForecast = async () => {
    
      const city = "Belgrade,RS";
      const api_call = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${api_key}`);
      const data = await api_call.json();
      console.log(data.data);
      this.setState ({
        temp1: data.data[1].temp,
        temp2: data.data[2].temp,
        temp3: data.data[3].temp,
        temp4: data.data[4].temp,
        temp5: data.data[5].temp,
        temp6: data.data[6].temp,
        temp7: data.data[7].temp,
        weatherDescription1: data.data[1].weather.description,
        weatherDescription2: data.data[2].weather.description,
        weatherDescription3: data.data[3].weather.description,
        weatherDescription4: data.data[4].weather.description,
        weatherDescription5: data.data[5].weather.description,
        weatherDescription6: data.data[6].weather.description,
        weatherDescription7: data.data[7].weather.description,



      }) ;
      }



  componentDidMount() {
    this.getWeather();
    this.getWeatherForecast();

}
  render() {
    return ( 
      <div>
        <div id='sidebar'>
          <div id='currWeather'>
            <CurrentWeather
            currTemp = {this.state.currTemp}
            weatherDescription = {this.state.weatherDescription}   
            />
            
          </div>
          <div id='detData'>
            <DetailedData
            humidity = {this.state.humidity}
            dewPt = {this.state.dewPt}
            uvIndex = {this.state.uvIndex}
            visibility = {this.state.visibility}            
            />
          </div>
        </div>
        <div id='main'>
        <WeekForecast
            city = {this.state.city}
            temp1 = {this.state.temp1}
            temp2 = {this.state.temp2}
            temp3 = {this.state.temp3}
            temp4 = {this.state.temp4}
            temp5 = {this.state.temp5}
            temp6 = {this.state.temp6}
            temp7 = {this.state.temp7}
            weatherDescription1 = {this.state.weatherDescription1}
            weatherDescription2 = {this.state.weatherDescription2}
            weatherDescription3 = {this.state.weatherDescription3}
            weatherDescription4 = {this.state.weatherDescription4}
            weatherDescription5 = {this.state.weatherDescription5}
            weatherDescription6 = {this.state.weatherDescription6}
            weatherDescription7 = {this.state.weatherDescription7}

        />
        </div>
      </div> 
    )
  }
}

export default App;