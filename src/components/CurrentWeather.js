import React from "react";

class CurrentWeather extends React.Component {
  render() {
    return ( 
      <div>
      <p> {this.props.currTemp} &#176;</p> 
      <p> {this.props.weatherDescription}</p>  

      </div>
    )
  }
}

export default CurrentWeather;