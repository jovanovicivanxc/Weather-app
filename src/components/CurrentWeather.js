import React from "react";
// import Cloud from "../assets/icons/cloud.svg";
// import Cloudy from "../assets/icons/cloudy.svg";
// import Rain from "../assets/icons/rain.svg";
// import Sun from "../assets/icons/sun.svg";
// import Storm from "../assets/icons/storn.svg";
// import Snowing from "../assets/icons/snowing.svg";
import chooseIcon from "../utilities/iconChooser.js"

class CurrentWeather extends React.Component {
 
  // chooseIcon = () => {
  //   if (this.props.weatherDescription === "Light rain" || this.props.weatherDescription === "Heavy rain" || this.props.weatherDescription === "Light shower rain")     {   
  //       return Rain;
  //      }  
  //   else if (this.props.weatherDescription === "Overcast clouds" || this.props.weatherDescription === "Broken clouds" || this.props.weatherDescription === "Scattered clouds")     {   
  //       return Cloud;
  //       }
  //   else if (this.props.weatherDescription === "Few clouds" )     {   
  //       return Cloudy;
  //       }    
  //   else if (this.props.weatherDescription === "Sunny" )     {   
  //       return Sun;
  //       } 
  //   else if (this.props.weatherDescription === "Thunderstorm with rain" )     {   
  //       return Storm;
  //       }
  //   else if (this.props.weatherDescription === "Snowing" )     {   
  //       return Snowing;
  //     }
  // }

  
  render() {
    return ( 
      <div>
        <div id="tempAndDes">
          <p> {this.props.currTemp} &#176;</p> 
          <p> {this.props.weatherDescription}</p>  
        </div>
        <div id="icon">   
          <img src={chooseIcon(this.props.weatherDescription)} alt="icon"/>
          </div>
      </div>
    )
  }
}

export default CurrentWeather;