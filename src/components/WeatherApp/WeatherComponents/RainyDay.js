import React from 'react';
import RainDay from '../../../images/WeatherIcons/day-rain-pngrepo-com.png';

//return image imported from above
function DayRain(props) {
return <img style={props.IconSize} src={RainDay} alt="Icon of sun behind cloud with raindrops" />;
};

export default DayRain;