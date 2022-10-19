import React from 'react';
import PartlyCloudyNight from '../../../images/WeatherIcons/partly-cloudy-night-pngrepo-com (1).png';

//return image imported from above
function PartCloudNight(props) {
return <img style={props.IconSize} src={PartlyCloudyNight} alt="Icon of moon coming through cloud" />;
};

export default PartCloudNight;