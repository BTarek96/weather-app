import React from "react";
import { ReactComponent as Sunny } from "../weatherIcons/Sunny.svg";
import { ReactComponent as Snowy } from "../weatherIcons/Snowy.svg";
import { ReactComponent as Rainy } from "../weatherIcons/Rainy.svg";
import { ReactComponent as Mist } from "../weatherIcons/Mist.svg";
import { ReactComponent as Cloudy } from "../weatherIcons/Cloudy.svg";
import "../weatherIcons/weathericons.css";
import { useEffect, useState } from "react";

const WeatherIcon = ({ id }) => {
  let icon = null;
  const [iconId, setIconId] = useState(0);

  useEffect(() => {
    setIconId(id);
  }, [id, iconId]);
  switch (iconId) {
    default:
      icon = <div></div>;
      break;
    case 2:
      icon = <Rainy />;
      break;
    case 3:
      icon = <Rainy />;
      break;
    case 5:
      icon = <Rainy />;
      break;
    case 6:
      icon = <Snowy />;
      break;
    case 7:
      icon = <Mist />;
      break;
    case 800:
      icon = <Sunny />;
      break;
    case 801:
    case 802:
    case 803:
    case 804:
      icon = <Cloudy />;
      break;
  }

  return <div className="svg-contain">{icon}</div>;
};

export default WeatherIcon;
