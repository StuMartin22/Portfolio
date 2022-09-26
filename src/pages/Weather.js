import CurrentWeather from "../components/CurrentWeather";
import SearchBar from "../components/WeatherSearch";
import { Heading, Main, Page, PageContent, Paragraph} from "grommet";
import { WeatherAPICall_URL, WeatherKEY } from "../constants/api_fetch";
import { useState } from "react";

const Weather = () => {

    const [WeatherNow, setWeatherNow] = useState(null);
    const [WeatherLater, setWeatherLater] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const CurrentWeatherCall = fetch(`${WeatherAPICall_URL}/weather?lat=${lat}&lon=${lon}&appid=${WeatherKEY}&units=imperial`);

        const ForecastCall = fetch(`${WeatherAPICall_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherKEY}&units=imperial`);

        Promise.all([CurrentWeatherCall, ForecastCall])
            .then(async (response) => {
                const CurrentResponse = await response[0].json();
                const ForecastResponse = await response[1].json();

                setWeatherNow({ city: searchData.label, ...CurrentResponse });
                setWeatherLater({ city: searchData.label, ...ForecastResponse });
            })
            .catch((err) => console.log(err));
    }

    console.log(WeatherNow);
    console.log(WeatherLater);

    return (
        <Main pad="small" align='center' justify='center' flex={true} responsive={true} wrap={true} height={{ min: '100vh' }} width={{ min: '190px' }} >
            <Page kind="narrow" align='center'>
                <PageContent background="light-3" elevation='large' align='center' width={{ min: '190px', max: '80vw' }} border={{ size: 'medium', color: 'brand' }} round='small' margin={{bottom:'5vh'}}>
                    <Heading>
                        Welcome to the weather!
                    </Heading>
                    <Paragraph>
                        This is a little app built using React, the CSS library grommet, OpenWeatherMapsAPI data, GeoDB Cities API data, and the Asyncpaginate node package.
                    </Paragraph>
                    <SearchBar onSearchChange={handleOnSearchChange} />
                </PageContent>
                { WeatherNow && <CurrentWeather data={WeatherNow} />} 
            </Page>
        </Main>

        // <Main pad="small" align='center' justify='center' flex={true} responsive={true} wrap={true} height={{ min: '100vh' }} width={{ min: '190px' }} >
        //     <Page kind="narrow" align='center'>
        //         <PageContent background="light-3" elevation='large' align='center' width={{ min: '190px', max: '80vw' }} border={{ size: 'medium', color: 'brand' }} round='small' margin={{ bottom: '5vh' }}>
        //             <Heading>
        //                 Weather Coming Soon!
        //             </Heading>
        //         </PageContent>
        //     </Page>
        // </Main>

    )
}

export default Weather;