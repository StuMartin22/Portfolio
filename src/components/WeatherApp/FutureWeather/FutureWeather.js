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
    return (
        <>
        { data.list.splice(0,7).map((item, index) => (
            <Card key={index} width={{ max: '15vw', min: '15vw' }} height={{ min: '15vh', max:'15vh' }} wrap={true} justify='center' align='center' background='light-2' border={{ 'color': 'brand', 'size': 'medium' }}>
            <CardHeader alignSelf='center' pad='small' fill='horizontal' background='dark-2' className="FutureDate">
                <Text size='large' weight='bolder'>Weather Outlook for {item.city} {data.list[0].dt_txt}: </Text>
            </CardHeader>
            <CardBody alignSelf='center'>
            <Paragraph>
                <Text weight='bold' margin={{ right: '1vh' }}>High:</Text>
                <Text className="FutureWeatherHighTemp" size='large'>{data.list[0].main.temp_max.toFixed(0)}°F</Text>
            </Paragraph>
            <Paragraph>
                <Text weight='bold' margin={{ right: '1vh' }}> Low:</Text>
                <Text className="FutureWeatherLowTemp" size='large'>{data.list[0].main.temp_min.toFixed(0)}°F</Text>
            </Paragraph>
                <Text className="FutureWeatherDescription" size="x-large" alignSelf="center">{data.list[0].weather[0].description}</Text>
            </CardBody>
            <CardFooter background="light-2" padding={{ right: 'small', left: 'small' }}>
                <Box alignSelf='center' className="FutureWeatherTypeIcon" width={{max:'small'}} height={{max:'small'}} margin={{bottom:'5vh'}}>
                    <div>
                        {(data.list[0].weather[0].icon === '01d' && <Sun />)
                        ||(data.list[0].weather[0].icon === '01n' && <Moon />)
                        ||(data.list[0].weather[0].icon === '02d' && <PartCloud />)
                        ||(data.list[0].weather[0].icon === '02n' && <PartCloudNight />)
                        ||(data.list[0].weather[0].icon === ('03d'||'03n') && <SingleCloud />)
                        ||(data.list[0].weather[0].icon === ('04d'||'04n') && <Cloudy />)
                        ||(data.list[0].weather[0].icon === ('09d'||'09n') && <Rain />)
                        ||(data.list[0].weather[0].icon === '10d' && <DayRain />)
                        ||(data.list[0].weather[0].icon === '10n' && <NightRain />)
                        ||(data.list[0].weather[0].icon === ('11d'||'11n') && <ThunderStorm />)
                        ||(data.list[0].weather[0].icon === ('13d' ||'13n') && <Snowy />)
                        ||(data.list[0].weather[0].icon === ('50d'||'50n') && <Fog />)}
                    </div>
                </Box>
            </CardFooter>
        </Card>
        ))}</>)}

        // async function timeConversion(){

        // }
// const utcTime = data.list[0].dt
// const humanDate = (utcTime * 1000)
// humanDate.toLocaleString();
// console.log (humanDate)

export default FutureWeather;