import React from 'react';
import Moony from '../images/moon-pngrepo-com.png';

//return image imported from above
function Moon() {
return <img style={{width: '20vw', height: '20vw'}} src={Moony} alt="Icon with hazy lines indicating an atmospheric weather condition" />;
};

export default Moon;