import { searchBar } from "../components/WeatherSearch";
import {Main, Page, PageContent, Heading, Paragraph } from grommet

const Weather = () => {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData)
    }

    return(
        <Main pad="small" align='center' justify='center' flex='true' responsive='true' wrap='true' height={{min:'100vh'}} >
        <Page kind="narrow" align='center'>
          <PageContent background="light-3" elevation='large' align='center' width={{min:'auto', max:'80vw'}} border={{size:'medium', color:'brand'}} round='small'>
            <Heading>
              Welcome to the weather!
            </Heading>
            <Paragraph>
              This is a little app built using React, the CSS library grommet, OpenWeatherMapsAPI data, 
            </Paragraph>
            <searchBar onSearchChange={handleOnSearchChange} />
          </PageContent>
        </Page>
      </Main>
        
    )
}

export default Weather;