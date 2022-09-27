import React from 'react';
import RainNight from '../../../images/WeatherIcons/night-rain-pngrepo-com.png';

//return image imported from above
function NightRain() {
return <img style={{width: '20vw', height: '20vw'}} src={RainNight} alt="Icon of moon behind cloud with raindrops" />;
};

export default NightRain;