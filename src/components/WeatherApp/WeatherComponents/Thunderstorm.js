import React from 'react';
import ThunderStormIcon from '../../../images/WeatherIcons/storm-pngrepo-com.png';

//return image imported from above
function ThunderStorm(props) {
return <img style={props.IconSize} src={ThunderStormIcon} alt="Icon of clouds with lightning" />;
};

export default ThunderStorm;