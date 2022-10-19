import React from 'react';
import Cloud from '../../../images/WeatherIcons/cloud-pngrepo-com.png';

//return image imported from above
function SingleCloud(props) {
return <img style={props.IconSize} src={Cloud} alt="Icon of a singular cloud" />;
};

export default SingleCloud;