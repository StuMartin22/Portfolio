import React from 'react';
import Moony from '../../../images/WeatherIcons/moon-pngrepo-com.png';

//return image imported from above
function Moon(props) {
return <img style={props.IconSize} src={Moony} alt="Icon with hazy lines indicating an atmospheric weather condition" />;
};

export default Moon;