import React from 'react';
import Snow from '../../../images/WeatherIcons/snow-pngrepo-com.png';

//return image imported from above
function Snowy(props) {
return <img style={props.IconSize} src={Snow} alt="Icon of snowflakes falling from cloud" />;
};

export default Snowy;