import React from 'react';
import RainIcon from '../../../images/WeatherIcons/rain-pngrepo-com.png';

//return image imported from above
function Rain(props) {
return <img style={props.IconSize} src={RainIcon} alt="Icon of rain falling from clouds" />;
};

export default Rain;