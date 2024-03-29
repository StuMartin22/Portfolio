import { Carousel, Heading, Main, Page, PageContent, Paragraph } from "grommet";
import { ProjectCard } from "../components/ProjectsPage/ProjectCard";

const Myprojects = () => {
    return (

        <Main pad="small" align='center' justify='center' flex={true} responsive={true} wrap={true} height={{ min: '100vh' }}>
            <Page kind="narrow" align='center'>
                <PageContent background="light-3" elevation='large' align='center' width={{ min: '230px', max: '80vw' }} border={{ size: 'medium', color: 'brand' }} round='small' margin={{ bottom: '3vh' }}>
                    <Heading>
                        Previous Work!
                    </Heading>
                    <Paragraph margin={{ bottom: '6vh' }}>
                        Here is a collection of projects that I have worked on or am beginning to continue development on. I will state in the body texts under each project section what is in progress so its apparent! Feel free to get in contact with me if you have suggestions or would like to fork or contribute the repository!
                    </Paragraph>
                </PageContent>
                <Carousel controls='arrows' wrap={true} margin={{ bottom: '2vh' }} width={{ min: 'small' }} >
                <ProjectCard
                        HeaderText='Weather App'
                        BodyText='A small app designed to help the user find out the current weather, and 5 day weather conditions for a searched location.
                            
                            This is a weather dashboard that pulls information from an openweatherAPI and displays it on the page. My first iteration of this project was several months ago and built with very limited html/css knowledge so I wanted to go back and give it another go with my knowledge now, and I have to say, its definitely come a long way from the first version!'
                        LiveLink='/weather'
                        RepoLink='https://github.com/StuMartin22/portfolio'
                    />
                    <ProjectCard
                        HeaderText='National Park Explorer'
                        BodyText='A collaborative full stack website project designed to help you find out more about National Parks. Not sure where to go? See tons of information about lots of parks and view comments other users have made. 
                            
                            This application was a collaboration between myself and 3 other authors for a project during BootCamp. This is still in a draft state. We had one week to create this application from scratch. Utilized React, JavaScript, GraphQL, and an API from the US National Parks Service.'
                        LiveLink='https://natl-parks-explorer.herokuapp.com/'
                        RepoLink='https://github.com/StuMartin22/national-park-explorer'
                    />
                    <ProjectCard
                        HeaderText='Genre-Finder'
                        BodyText='Have you ever wanted to discover new music easily? Genre-Finder is for you! Select a genre, get top albums and artists; its that simple. This was an earlier project that I was fortunate enough to be team lead on. Between myself and 3 other authors only a couple weeks into our bootcamp. 
                            
                            I loved the challenge of not only creating the application, but making sure everyone was on task and working on separate aspects to create one unified product. Designed to allow you to find top albums or artists from preselected genres. Future development ideas would include an update to the UX/UI and better utilizing API data from searches via JavaScript logic.'
                        LiveLink='https://stumartin22.github.io/genre-finder/'
                        RepoLink='https://github.com/StuMartin22/genre-finder'
                    />
                </Carousel>
            </Page>
        </Main>
    )
};


export default Myprojects;