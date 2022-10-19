import React from 'react';
import Foggy from '../../../images/WeatherIcons/fog-pngrepo-com.png';

//return image imported from above
function Fog(props) {
return <img style={props.IconSize} src={Foggy} alt="Icon with hazy lines indicating an atmospheric weather condition" />;
};

export default Fog;