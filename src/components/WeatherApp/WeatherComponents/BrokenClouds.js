import React from 'react';
import BrokenClouds from '../../../images/WeatherIcons/clouds-pngrepo-com.png';

//return image imported from above
function Cloudy(props) {
return <img style={props.IconSize} src={BrokenClouds} alt="Icon of overlapping clouds" />;
};

export default Cloudy;