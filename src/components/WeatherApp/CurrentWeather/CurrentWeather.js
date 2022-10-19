import { Box, Card, CardHeader, CardBody, CardFooter, Paragraph, Text } from "grommet";
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

const CurrentWeather = ({ data }) => {
    return (
        <Card width={{ max: '60vw', min: 'small' }} height={{ min: 'auto' }} wrap={true} justify='center' align='center' background='light-2' border={{ 'color': 'brand', 'size': 'medium' }} margin={{ bottom: '5vh' }}>
            <CardHeader alignSelf='center' pad='medium' fill='horizontal' background='dark-2' className="Date">
                <Text size='large' weight='bolder'>Weather Outlook for {data.city} Today: </Text>
            </CardHeader>
            <CardBody alignSelf='center'>
                <Paragraph>
                    <Text weight='bold' margin={{ right: '1vh' }} >The Current Temperature is:</Text>
                    <Text className="WeatherCurrentTemp" size='xx-large'>{data.main.temp.toFixed(0)}°F</Text>
                </Paragraph>
                <Paragraph alignSelf="center">
                    <Text weight='bold' margin={{ right: '1vh' }} alignSelf="center">Feels Like:</Text>
                    <Text className="FeelsLike" size='x-large'>{data.main.feels_like.toFixed(0)}°F</Text>
                </Paragraph>
                <Box alignSelf='center' className="WeatherTypeIcon" width={{ max: 'small' }} height={{ max: 'small' }} margin={{ bottom: '5vh' }}>
                    <div>
                        {(
                            data.weather[0].icon === '01d' && 
                            <Sun IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === '01n' && 
                            <Moon IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === '02d' && 
                            <PartCloud IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === '02n' && 
                            <PartCloudNight IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === ('03d' || '03n') && 
                            <SingleCloud IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === ('04d' || '04n') && 
                            <Cloudy IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === ('09d' || '09n') && 
                            <Rain IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === '10d' && 
                            <DayRain IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === '10n' && 
                            <NightRain IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === ('11d' || '11n') && 
                            <ThunderStorm IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === ('13d' || '13n') && 
                            <Snowy IconSize={{ width: '20vw', height: '20vh' }} />)
                            || (data.weather[0].icon === ('50d' || '50n') && 
                            <Fog IconSize={{ width: '20vw', height: '20vh' }} />
                        )}
                    </div>
                </Box>
                <Text className="WeatherDescription" size="x-large" alignSelf="center">{data.weather[0].description}</Text>
            </CardBody>
            <CardFooter background="light-2" padding={{ right: 'small', left: 'small' }}>
                <Paragraph>
                    <Text weight='bold' margin={{ right: '1vh' }}>High:</Text>
                    <Text className="WeatherHighTemp" size='large'>{data.main.temp_max.toFixed(0)}°F</Text>
                </Paragraph>
                <Paragraph>
                    <Text weight='bold' margin={{ right: '1vh' }}> Low:</Text>
                    <Text className="WeatherLowTemp" size='large'>{data.main.temp_min.toFixed(0)}°F</Text>
                </Paragraph>
            </CardFooter>
        </Card>
    )
};

export default CurrentWeather;