import { Paragraph, Main, Page, PageContent, Heading, Carousel } from "grommet"
import { ProjectCard } from "../components/ProjectCard";

const Mytest = () => {
    return (
        <Main pad="small" align='center' justify='center' flex='true' responsive='true' wrap='true' height={{ min: '100vh' }}>
        <Page kind="narrow" align='center'>
            <PageContent background="light-3" elevation='large' align='center' width={{ min: '178px', max: '80vw' }} border={{ size: 'medium', color: 'brand' }} round='small' margin={{ bottom: '3vh' }}>
                <Heading>
                    test!
                </Heading>
                <Paragraph margin={{ bottom: '6vh' }}>
                test </Paragraph>
            </PageContent>
            <Carousel controls='arrows' wrap='true' margin={{ bottom: '2vh' }} width={{ min: 'small' }} elevation='large'>
                <ProjectCard
                    HeaderText='test'
                />
                <ProjectCard
                    HeaderText='test'
                />
                <ProjectCard
                    HeaderText='test'
                />
            </Carousel>
        </Page>
    </Main>
    )};

    export default Mytest;