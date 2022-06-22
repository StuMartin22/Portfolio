import { Box, Carousel, Main } from "grommet";
import { ProjectCard } from "../components/ProjectCard";

const Myprojects  = () => {
  return(
    
    <Main>
        <Box>
            <Carousel>
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
                <ProjectCard />
            </Carousel>
        </Box>
    </Main>
  )
};


export default Myprojects;