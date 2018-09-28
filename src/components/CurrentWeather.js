import React from "react";
import chooseIcon from "../utilities/iconChooser.js"
import Refresh from "../assets/icons/refresh.svg";


class CurrentWeather extends React.Component {
   render() {
    return ( 
      <div>
        <div id="tempAndDes">
          <p id="currTemp"> {this.props.currTemp} &#176;</p> 
          <p id="currDes"> {this.props.weatherDescription}</p>  
        </div>
        <div id="icon">   
          <img id="iconImg" src={chooseIcon(this.props.weatherDescription)} alt="icon"/>
        </div>
        <div id="refresh">
          <img id="refImg" src={Refresh} onClick={this.props.refreshCurrentWeather} alt="refresh" />
          &nbsp; <span>Updated {this.props.timePassed} mins ago </span>
        </div>

      </div>
    )
  }
}

export default CurrentWeather;