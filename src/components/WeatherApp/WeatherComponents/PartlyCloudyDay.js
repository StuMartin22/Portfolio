import React from 'react';
import PartCloudDay from '../../../images/WeatherIcons/cloudy-pngrepo-com.png';

//return image imported from above
function PartCloud(props) {
return <img style={props.IconSize} src={PartCloudDay} alt="Icon of sun coming through cloud" />;
};

export default PartCloud;