import { Card, CardHeader, CardBody, CardFooter, Paragraph, Text } from "grommet";
import { Cloud } from "grommet-icons";

const CurrentWeather = () => {
    return (
        <Card width={{ max:'60vw', min:'small' }} height={{min:'auto'}} wrap={true} justify='center' align='center' background='light-2' border={{'color':'brand', 'size':'medium'}}>
            <CardHeader alignSelf='center' pad='medium' fill='horizontal' background='dark-2' className="Date">
            <Text size='large' weight='bolder'>Weather Outlook for Today: </Text>
            </CardHeader>
            <CardBody alignSelf='center'>
                <Paragraph>
                    <Text weight='bold' margin={{right:'1vh'}}>The Current Temperature is:</Text> 
                    <Text className="WeatherCurrentTemp" size='xx-large'>72°</Text>
                </Paragraph>
                <Paragraph alignSelf='center' className="WeatherTypeIcon">
                    <Cloud color="brand" size='large' />
                </Paragraph>
            </CardBody>
            <CardFooter background="light-2" padding={{right:'small', left:'small' }}>
                <Paragraph> 
                    <Text weight='bold' margin={{right:'1vh'}}>High:</Text>
                    <Text className="WeatherHighTemp">75°</Text>
                </Paragraph>
                <Paragraph>
                    <Text weight='bold' margin={{right:'1vh'}}> Low:</Text>
                    <Text className="WeatherLowTemp">69°</Text>
                </Paragraph>
            </CardFooter>
        </Card>
    )
};

export default CurrentWeather;