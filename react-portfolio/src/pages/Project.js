import { Box, Carousel, Heading, Main, Paragraph } from "grommet";
import { ProjectCard } from "../components/ProjectCard";

const Myprojects  = () => {
  return(
    
    <Main>
        <Box justifyContent='center' align='center' flex={true} responsive={true}>
            <Heading>
                How to contact me!
            </Heading>
            <Paragraph margin={{ bottom: '6vh' }}>
                Are you liking what you see? Are you so offended that you just need to reach out to tell me? Then do so here with one of the following! Email is the best way to get a hold of me, however, any method will do!
            </Paragraph>
            <Carousel controls='arrows'>
                <ProjectCard
                    HeaderText='Testing One Heading'
                    BodyText='Testing One Body'
                    ButtonLink='https://bobbyhadz.com/blog/react-button-link'
                    ButtonTwoLink='https://bobbyhadz.com/blog/react-button-link'
                 />
                <ProjectCard
                    HeaderText='Testing Two Heading'
                    BodyText='Testing Two Body'
                    ButtonLink='https://bobbyhadz.com/blog/react-button-link'
                    ButtonTwoLink='https://bobbyhadz.com/blog/react-button-link'
                 />
                <ProjectCard
                    HeaderText='Testing Two Heading'
                    BodyText='Testing Two Body'
                    ButtonLink='https://bobbyhadz.com/blog/react-button-link'
                    ButtonTwoLink='https://bobbyhadz.com/blog/react-button-link'
                 />
            </Carousel>
        </Box>
    </Main>
  )
};


export default Myprojects;