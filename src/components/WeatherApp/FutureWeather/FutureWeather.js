import { Box, Card, CardBody, CardFooter, CardHeader, Main, Paragraph, Tab, Tabs, Text } from "grommet";
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
    // console.log(neededWeather)
    return (
        <>
            {neededWeather.map((item, index) => (
                <Card key={index} width={{ max: '60vw', min: 'small' }} height={{ min: 'auto' }} wrap={true} justify='center' align='center' background='light-2' border={{ 'color': 'brand', 'size': 'medium' }}>
                    <CardHeader alignSelf='center' pad='medium' fill='horizontal' background='dark-2' className="Date">
                        <Text size='large' weight='bolder'>Weather Outlook for {item.city} {item.dt_txt.substring(0,10)} </Text>
                    </CardHeader>
                    <CardBody alignSelf='center'>
                        <Paragraph>
                            <Text weight='bold' margin={{ right: '1vh' }}>High:</Text>
                            <Text className="FutureWeatherHighTemp" size='large'>{item.main.temp_max.toFixed(0)}°F</Text>
                        </Paragraph>
                        <Paragraph>
                            <Text weight='bold' margin={{ right: '1vh' }}> Low:</Text>
                            <Text className="FutureWeatherLowTemp" size='large'>{item.main.temp_min.toFixed(0)}°F</Text>
                        </Paragraph>
                        <Text className="FutureWeatherDescription" size="x-large" alignSelf="center">{item.weather[0].description}</Text>
                    </CardBody>
                    <CardFooter background="light-2" padding={{ right: 'small', left: 'small' }}>
                        <Box alignSelf='center' className="FutureWeatherTypeIcon" width={{ max: 'small' }} height={{ max: 'small' }} margin={{ bottom: '5vh' }} >
                            <div>
                                {(item.weather[0].icon === '01d' && <Sun />)
                                    || (item.weather[0].icon === '01n' && <Moon />)
                                    || (item.weather[0].icon === '02d' && <PartCloud />)
                                    || (item.weather[0].icon === '02n' && <PartCloudNight />)
                                    || (item.weather[0].icon === ('03d' || '03n') && <SingleCloud />)
                                    || (item.weather[0].icon === ('04d' || '04n') && <Cloudy />)
                                    || (item.weather[0].icon === ('09d' || '09n') && <Rain />)
                                    || (item.weather[0].icon === '10d' && <DayRain />)
                                    || (item.weather[0].icon === '10n' && <NightRain />)
                                    || (item.weather[0].icon === ('11d' || '11n') && <ThunderStorm />)
                                    || (item.weather[0].icon === ('13d' || '13n') && <Snowy />)
                                    || (item.weather[0].icon === ('50d' || '50n') && <Fog />)}
                            </div>
                        </Box>
                    </CardFooter>
                </Card>
            )
            )}</>)
}

export default FutureWeather;