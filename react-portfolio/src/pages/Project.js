import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Main, Paragraph, Text, Tip} from 'grommet';
import { Github, Linkedin, Mail, Phone } from 'grommet-icons';


const Myprojects = () => {
  return(

    <Main>
        <Heading>
            Check out some of the stuff I've worked on!
        </Heading>

        <Paragraph margin={{bottom:'6vh'}}>
            Here are some projects that I have worked on in the past! All of these will have links to both the live link (if available) and the repository on GitHub! 
        </Paragraph>

        <Box>

            <Card justify='center' alignSelf='center' background='light-3' border={{'color':'dark-5', 'size':'medium'}}>
                <CardHeader justify='center' pad="small">
                    <Text size='large'>PROJECT1</Text>
                </CardHeader>
                <CardBody align='center' pad="medium">BODY PROJECT1</CardBody>
                <CardFooter background='light-3'>
                    <Tip content='Click here to check this project out!'>
                        <Button primary label='Live Link' />
                    </Tip>
                    <Tip content='Click here go to check out the repo!'>
                        <Button />
                    </Tip>
                </CardFooter>
            </Card>

            <Card justify='center' align='center' background='light-3' border={{'color':'dark-5', 'size':'medium'}}>
                <CardHeader justify='center' pad="small">
                    <Text size='large'>PROJECT2</Text>
                </CardHeader>
                <CardBody alignContent='center' pad="medium">BODY PROJECT2</CardBody>
                <CardFooter background='light-3'>
                    <Tip content='Click here to check this project out!'>
                        <Button />
                    </Tip>
                    <Tip content='Click here to check the repo!'>
                        <Button />
                    </Tip>
                </CardFooter>
            </Card>

            <Card justify='center' align='center' background='light-3' border={{'color':'dark-5','size':'medium'}}>
                <CardHeader justify='center' pad="small">
                    <Text size='large'>PROJECT3</Text>
                </CardHeader>
                <CardBody alignContent='center' pad="medium">BODY PROJECT3</CardBody>
                <CardFooter background='light-3'>
                    <Tip content='Click here to check this project out!'>
                        <Button />
                    </Tip>
                    <Tip content='Click here to check out the repo!'>
                        <Button />
                    </Tip>
                </CardFooter>
            </Card>

        </Box>

    </Main>

  )
};

export default Myprojects;