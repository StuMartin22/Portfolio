import React from 'react';
import RainNight from '../../../images/WeatherIcons/night-rain-pngrepo-com.png';

//return image imported from above
function NightRain(props) {
return <img style={props.IconSize} src={RainNight} alt="Icon of moon behind cloud with raindrops" />;
};

export default NightRain;