import React from "react";
import chooseIcon from "../utilities/iconChooser.js"

let utc = new Date();
let day = utc.getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dayWeek1 = days[ utc.getDay()+1];
let dayWeek2 = days[ utc.getDay()+2];
let dayWeek3 = days[ utc.getDay()+3];
let dayWeek4 = days[ utc.getDay()+4];
let dayWeek5 = days[ utc.getDay()+5];
let dayWeek6 = days[ utc.getDay()+6];
let dayWeek7 = days[ utc.getDay()+7];

let month = monthNames[utc.getMonth()];
// console.log(day, month,dayWeek1);

class WeekForecast extends React.Component {


  render() {
    return ( 
      <div id="weekForecast">
        <div id="headline">
          <h1> {this.props.city} </h1>
          <h3> {day} {month} </h3>
        </div>
        
        <div>
          <div id='forcField'>
            <img src={chooseIcon(this.props.weatherDescription1)}alt="icon"/>
            <p> {this.props.temp1}&#176;</p>
            <p> {dayWeek1.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <img src={chooseIcon(this.props.weatherDescription2)} alt="icon"/>
            <p> {this.props.temp2}&#176;</p>
            <p> {dayWeek2.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <img src={chooseIcon(this.props.weatherDescription3)} alt="icon"/>
            <p> {this.props.temp3}&#176;</p>
            <p> {dayWeek3.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <img src={chooseIcon(this.props.weatherDescription4)} alt="icon"/>
            <p> {this.props.temp4}&#176;</p>
            <p> {dayWeek4.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <img src={chooseIcon(this.props.weatherDescription5)} alt="icon"/>
            <p> {this.props.temp5}&#176;</p>
            <p> {dayWeek5.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'> 
            <img src={chooseIcon(this.props.weatherDescription6)} alt="icon"/>
            <p> {this.props.temp6}&#176;</p>
            <p> {dayWeek6.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <img src={chooseIcon(this.props.weatherDescription7)} alt="icon"/>
            <p> {this.props.temp7}&#176;</p>
            <p> {dayWeek7.slice(0,3).toUpperCase()} </p>
          </div>
        </div>

      </div>
    )
  }
}

export default WeekForecast;