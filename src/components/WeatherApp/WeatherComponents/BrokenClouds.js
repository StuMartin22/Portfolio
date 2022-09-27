import React from 'react';
import BrokenClouds from '../../../images/WeatherIcons/clouds-pngrepo-com.png';

//return image imported from above
function Cloudy() {
return <img style={{width: '20vw', height: '20vw'}} src={BrokenClouds} alt="Icon of overlapping clouds" />;
};

export default Cloudy;