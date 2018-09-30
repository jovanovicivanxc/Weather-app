import React from 'react';
import moment from 'moment';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import DetailedData from './components/DetailedData';
import WeekForecast from './components/WeekForecast';

const api_key = "53ef50b153144d289e1dc4cfc7676cf9";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currTemp: undefined,
      weatherDescription: undefined,
      humidity: undefined,
      dewPt: undefined,
      uvIndex: undefined,
      visibility: undefined,
      city: "Belgrade",
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
      image: true, 
      timeago: "a few seconds ago",
       }

    this.changeCity = this.changeCity.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getWeatherForecast = this.getWeatherForecast.bind(this);
    
  }

  getWeather = async () => {

    const api_call = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.state.city}&key=${api_key}`);
    const data = await api_call.json();
    console.log(data.data[0]);
    setInterval(this.reloadTime,5000);

    // localStorage.setItem('time', new Date());
    // let savedTime = new Date(localStorage.getItem('time'));
    
    
    this.setState({
      currTemp: data.data[0].temp.toFixed(0),
      weatherDescription: data.data[0].weather.description,
      humidity: data.data[0].rh,
      dewPt: data.data[0].dewpt,
      uvIndex: data.data[0].uv.toFixed(0),
      visibility: data.data[0].vis,
      });
  }

  reloadTime = ()  => {
    this.setState({
     timeago: moment().startOf('minute').fromNow(),
     });
  }
  
  
  getWeatherForecast = async () => {

    const api_call = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${this.state.city}&key=${api_key}`);
    const data = await api_call.json();
    console.log(data.data);
    this.setState({
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
    });
  }
  componentDidMount() {
    this.getWeather();
    this.getWeatherForecast();

  }
 
  reloadComponents () {
    this.getWeather();
    this.getWeatherForecast();
     }

  changeCity() {
    if (this.state.city === "Novi Sad") {
      this.setState({
        city: "Belgrade",
      })
    }
    else {
      this.setState({
        city: "Novi Sad",
      })
    }
    this.setState({image: !this.state.image})
    return this.reloadComponents();
  }

  render() {
    let backg = this.state.image ? "backgrBG" : "backgrNS";
    return (
      <div>
        <div id='sidebar'>
          <div id='currWeather'>
            <CurrentWeather
              currTemp={this.state.currTemp}
              weatherDescription={this.state.weatherDescription}
              refreshCurrentWeather={this.getWeather}
              timeago = {this.state.timeago} 
            />

          </div>
          <div id='detData'>
            <DetailedData
              humidity={this.state.humidity}
              dewPt={this.state.dewPt}
              uvIndex={this.state.uvIndex}
              visibility={this.state.visibility}
            />
          </div>
        </div>
        <div id='main' className={backg}>
          <h1 onClick={this.changeCity}> {this.state.city} </h1>
          <span> (Click to change between cities) </span>
          <WeekForecast
            city={this.state.city}
            temp1={this.state.temp1}
            temp2={this.state.temp2}
            temp3={this.state.temp3}
            temp4={this.state.temp4}
            temp5={this.state.temp5}
            temp6={this.state.temp6}
            temp7={this.state.temp7}
            weatherDescription1={this.state.weatherDescription1}
            weatherDescription2={this.state.weatherDescription2}
            weatherDescription3={this.state.weatherDescription3}
            weatherDescription4={this.state.weatherDescription4}
            weatherDescription5={this.state.weatherDescription5}
            weatherDescription6={this.state.weatherDescription6}
            weatherDescription7={this.state.weatherDescription7}
          />
        </div>
      </div>
    )
  }
}

export default App;