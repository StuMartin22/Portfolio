import { Carousel, Heading, Main, Page, PageContent, Paragraph } from "grommet";
import { ProjectCard } from "../components/ProjectCard";

const Myprojects = () => {
    return (

        <Main pad="small" align='center' justify='center' flex='true' responsive='true' wrap='true' height={{ min: '100vh' }}>
            <Page kind="narrow" align='center'>
            <PageContent background="light-3" elevation='large' align='center' width={{min:'178px', max:'80vw'}} border={{size:'medium', color:'brand'}} round='small' margin={{bottom:'3vh'}}>
                {/* <Box justifyContent='center' align='center' flex={true} responsive={true}> */}
                    <Heading>
                        Previous Work!
                    </Heading>
                    <Paragraph margin={{ bottom: '6vh' }}>
                        Here is a collection of projects that I have worked on or am beginning to continue development on. I will state in the body texts under each project section what is in progress so its apparent! Feel free to get in contact with me if you have suggestions or would like to fork or contribute the repository!
                    </Paragraph>
                    </PageContent>
                    <Carousel controls='arrows' wrap='true' margin={{ bottom: '2vh' }} width={{min:'small'}} elevation='large'>
                        <ProjectCard
                            HeaderText='Weather App'
                            BodyText='This is a weather dashboard that pulls information from an API and displays it on the page. Originally written in basic HTML, CSS, and JavaScript but I am currently working on adapting it into a react application while refactoring the current functionality.'
                            LiveLink='https://bobbyhadz.com/blog/react-button-link'
                            RepoLink='https://bobbyhadz.com/blog/react-button-link'
                        />
                        <ProjectCard
                            HeaderText='Note Taking App'
                            BodyText='A web based application for taking notes. You can save, edit, and delete notes that you have made within the app. This is primarily a refactoring, however, there are elements of HTML, CSS, and JavaScript present and modified by myself. I may go through and recreate this in my own styling at some point in the future, however, this is its current state.'
                            LiveLink='https://bobbyhadz.com/blog/react-button-link'
                            RepoLink='https://bobbyhadz.com/blog/react-button-link'
                        />
                        <ProjectCard
                            HeaderText='National Park Explorer'
                            BodyText='This application was a collaboration between myself and 3 other authors for a project during the University of Minnesota Coding BootCamp. This is still in a draft state. We had one week to create this application from scratch. Utilized React, JavaScript, GraphQL, and an API from the US National Parks Service.'
                            LiveLink='https://bobbyhadz.com/blog/react-button-link'
                            RepoLink='https://bobbyhadz.com/blog/react-button-link'
                        />
                        <ProjectCard
                            HeaderText='Genre-Finder'
                            BodyText='This was an earlier project that I was fortunate enough to be team lead on. Between myself and 3 other authors only a couple weeks into our bootcamp. I loved the challenge of not only creating the application, but making sure everyone was on task and working on separate aspects to create one unified product. Designed to allow you to find top albums or artists from preselected genres. Future development ideas would include an update to the UX/UI and better utilizing API data from searches via JavaScript logic.'
                            LiveLink='https://bobbyhadz.com/blog/react-button-link'
                            RepoLink='https://bobbyhadz.com/blog/react-button-link'
                        />
                    </Carousel>
                {/* </Box> */}
            </Page>
        </Main>
    )
};


export default Myprojects;