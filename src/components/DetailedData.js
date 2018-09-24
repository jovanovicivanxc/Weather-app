import React from "react";

class DetailedData extends React.Component {
  render() {
    return ( 
      <div>
        <div className = "field">
          <p> {this.props.humidity} % </p>
          <p> Humidity </p>
        </div>

        <div className = "field">
          <p> {this.props.dewPt} &#176; </p>
          <p> Dew Pt. </p>
        </div>

         <div className = "field">
          <p> {this.props.uvIndex} /10 </p>
          <p> UV Index </p>
        </div>

        <div className = "field">
          <p> {this.props.visibility} km </p>
          <p> Visibility </p>
        </div>
      </div>
    )
  }
}

export default DetailedData;