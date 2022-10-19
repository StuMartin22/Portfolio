import React from 'react';
import Sunny from '../../../images/WeatherIcons/sun-pngrepo-com.png';

//return image imported from above
function Sun(props) {
return <img style={props.IconSize} src={Sunny} alt="Icon of sun and clear skies" />;
};

export default Sun;