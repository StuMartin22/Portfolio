import { Box, Card, CardBody, CardFooter, CardHeader, Paragraph, Text } from "grommet";
import PartCloud from '../WeatherComponents/PartlyCloudyDay';
import PartCloudNight from "../WeatherComponents/PartlyCloudyNight";
import Cloudy from "../WeatherComponents/BrokenClouds";
import Rain from "../WeatherComponents/Rain";
import NightRain from "../WeatherComponents/RainyNight";
import DayRain from "../WeatherComponents/RainyDay";
import ThunderStorm from "../WeatherComponents/Thunderstorm";
import Snowy from "../WeatherComponents/Snow";
import Fog from "../WeatherComponents/Atmosphere";
import SingleCloud from "../WeatherComponents/Cloud";
import Sun from "../WeatherComponents/Sun";
import Moon from "../WeatherComponents/Moon";

const FutureWeather = ({ data }) => {
    let neededWeather = data.list.filter(list => list['dt_txt'].includes('18:00:00'))
    return (
        <>
            {neededWeather.map((item, index) => (
                <Card key={index} width={{ max: 'auto', min: '230px' }} height={{ min: 'auto' }} wrap={true} background='light-2' border={{ 'color': 'brand', 'size': 'medium' }} margin={{bottom:'1vh'}} fill='horizontal'>
                    <CardHeader  pad='medium'  background='dark-2' className="Date" justify="center">
                        <Text size='x-large' weight='bolder'>{item.dt_txt.substring(5, 10)}</Text>
                    </CardHeader>
                    <CardBody>
                        <Paragraph alignSelf="center" margin={{bottom:'-2vh'}}>
                            <Text weight='bold' size='x-large'>High: </Text>
                            <Text className="FutureWeatherHighTemp" size='x-large' >{item.main.temp_max.toFixed(0)}°F</Text>
                        </Paragraph>
                        <Paragraph alignSelf="center" margin={{bottom: '-2vh'}}>
                            <Text weight='bold' size='x-large'> Low: </Text>
                            <Text className="FutureWeatherLowTemp" size='x-large' >{item.main.temp_min.toFixed(0)}°F</Text>
                        </Paragraph>
                        <Paragraph alignSelf="center" >
                            <Text className="FutureWeatherDescription" size="x-large">{item.weather[0].description}</Text>
                        </Paragraph>
                    </CardBody>
                    <CardFooter background="light-2" alignSelf="center">
                        <Box  className="FutureWeatherTypeIcon" width={{ max: 'small' }} height={{ max: 'small' }} margin={{ bottom: '2vh' }}>
                            <div>
                                {(
                                item.weather[0].icon === '01d' && 
                                <Sun IconSize={{width: '40px', height: '40px'}}/>)
                                || (item.weather[0].icon === '02d' && 
                                <PartCloud IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === '01n' && 
                                <Moon IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === ('03d' || '03n') && 
                                <SingleCloud IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === '02n' && 
                                <PartCloudNight IconSize={{width: '40px', height: '40px'}}/>)
                                || (item.weather[0].icon === ('04d' || '04n') && 
                                <Cloudy IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === ('09d' || '09n') && 
                                <Rain IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === '10d' && 
                                <DayRain IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === '10n' && 
                                <NightRain IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === ('11d' || '11n') && 
                                <ThunderStorm IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === ('13d' || '13n') && 
                                <Snowy IconSize={{width: '40px', height: '40px'}} />)
                                || (item.weather[0].icon === ('50d' || '50n') && 
                                <Fog IconSize={{width: '40px', height: '40px'}} />)}
                            </div>
                        </Box>
                    </CardFooter>
                </Card>
            )
            )}</>)
}

export default FutureWeather;