import React from "react";

var utc = new Date();
var day = utc.getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var dayWeek1 = days[ utc.getDay()+1];
var dayWeek2 = days[ utc.getDay()+2];
var dayWeek3 = days[ utc.getDay()+3];
var dayWeek4 = days[ utc.getDay()+4];
var dayWeek5 = days[ utc.getDay()+5];
var dayWeek6 = days[ utc.getDay()+6];
var dayWeek7 = days[ utc.getDay()+7];

var month = monthNames[utc.getMonth()];
console.log(day, month,dayWeek1);

class WeekForecast extends React.Component {


  render() {
    return ( 
      <div>
        <div id="headline">
          <p> {this.props.city} </p>
          <p> {day} {month} </p>
        </div>
        
        <div>
          <div id='forcField'>
            <p> {this.props.temp1}&#176;</p>
            <p> {dayWeek1.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <p> {this.props.temp2}&#176;</p>
            <p> {dayWeek2.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <p> {this.props.temp3}&#176;</p>
            <p> {dayWeek3.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <p> {this.props.temp4}&#176;</p>
            <p> {dayWeek4.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <p> {this.props.temp5}&#176;</p>
            <p> {dayWeek5.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <p> {this.props.temp6}&#176;</p>
            <p> {dayWeek6.slice(0,3).toUpperCase()} </p>
          </div>
          <div id='forcField'>
            <p> {this.props.temp7}&#176;</p>
            <p> {dayWeek7.slice(0,3).toUpperCase()} </p>
          </div>
        </div>

      </div>
    )
  }
}

export default WeekForecast;