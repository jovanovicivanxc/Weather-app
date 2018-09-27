import Cloud from "../assets/icons/cloud.svg";
import Cloudy from "../assets/icons/cloudy.svg";
import Rain from "../assets/icons/rain.svg";
import Sun from "../assets/icons/sun.svg";
import Storm from "../assets/icons/storn.svg";
import Snowing from "../assets/icons/snowing.svg";

  const chooseIcon = (weatherDescription) => {
    if (weatherDescription === "Light rain" || weatherDescription === "Heavy rain" || weatherDescription === "Light shower rain")     {   
        return Rain;
       }  
    else if (weatherDescription === "Overcast clouds" || weatherDescription === "Broken clouds" || weatherDescription === "Scattered clouds")     {   
        return Cloud;
        }
    else if (weatherDescription === "Few clouds" || weatherDescription === "Fog")     {   
        return Cloudy;
        }    
    else if (weatherDescription === "Sunny" || weatherDescription === "Clear Sky" || weatherDescription === "Clear sky")     {   
        return Sun;
        } 
    else if (weatherDescription === "Thunderstorm with rain" )     {   
        return Storm;
        }
    else if (weatherDescription === "Snowing" )     {   
        return Snowing;
      }
  }

export default chooseIcon