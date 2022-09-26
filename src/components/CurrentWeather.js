import { Box, Card, CardHeader, CardBody, CardFooter, Paragraph, Text } from "grommet";
import PartCloud from '../components/PartlyCloudyDay'
import PartCloudNight from "./PartlyCloudyNight";
import Cloudy from "./BrokenClouds";
import Rain from "./Rain";
import NightRain from "./RainyNight";
import DayRain from "./RainyDay";
import ThunderStorm from "./Thunderstorm";
import Snowy from "./Snow";
import Fog from "./Atmosphere";
import SingleCloud from "./Cloud";
import Sun from "./Sun";
import Moon from "./Moon";

const CurrentWeather = ({ data }) => {
    return (
        <Card width={{ max: '60vw', min: 'small' }} height={{ min: 'auto' }} wrap={true} justify='center' align='center' background='light-2' border={{ 'color': 'brand', 'size': 'medium' }}>
            <CardHeader alignSelf='center' pad='medium' fill='horizontal' background='dark-2' className="Date">
                <Text size='large' weight='bolder'>Weather Outlook for {data.city} Today: </Text>
            </CardHeader>
            <CardBody alignSelf='center'>
                <Paragraph>
                    <Text weight='bold' margin={{ right: '1vh' }} >The Current Temperature is:</Text>
                    <Text className="WeatherCurrentTemp" size='xx-large'>{data.main.temp.toFixed(0)}°F</Text>
                </Paragraph>
                <Paragraph alignSelf="center">
                    <Text weight='bold' margin={{ right:'1vh' }} alignSelf="center">Feels Like:</Text> 
                    <Text className="FeelsLike" size='x-large'>{data.main.feels_like.toFixed(0)}°F</Text>
                </Paragraph>
                <Box alignSelf='center' className="WeatherTypeIcon" width={{max:'small'}} height={{max:'small'}} margin={{bottom:'5vh'}}>
                    <div>
                        {(data.weather[0].icon === '01d' && <Sun />)
                        ||(data.weather[0].icon === '01n' && <Moon />)
                        ||(data.weather[0].icon === '02d' && <PartCloud />)
                        ||(data.weather[0].icon === '02n' && <PartCloudNight />)
                        ||(data.weather[0].icon === ('03d'||'03n') && <SingleCloud />)
                        ||(data.weather[0].icon === ('04d'||'04n') && <Cloudy />)
                        ||(data.weather[0].icon === ('09d'||'09n') && <Rain />)
                        ||(data.weather[0].icon === '10d' && <DayRain />)
                        ||(data.weather[0].icon === '10n' && <NightRain />)
                        ||(data.weather[0].icon === ('11d'||'11n') && <ThunderStorm />)
                        ||(data.weather[0].icon === ('13d' ||'13n') && <Snowy />)
                        ||(data.weather[0].icon === ('50d'||'50n') && <Fog />)}
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