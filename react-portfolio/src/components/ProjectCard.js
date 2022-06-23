import { Main, Card, CardHeader, CardBody, CardFooter, Button } from "grommet";

export const ProjectCard = (props) => {
    return(
        <Main align='center' flex='true' pad='medium'>
            <Card width='30vw' height='30vh' pad='medium' elevation='large' margin='auto'>
                <CardHeader className='HeaderText'>{props.HeaderText}</CardHeader>
                <CardBody className='BodyText'>{props.BodyText}</CardBody>
                <CardFooter>
                    <a className='ButtonLink' href={props.ButtonLink}><Button>View App</Button></a>
                    <a className='ButtonTwoLink' href={props.ButtonTwoLink}><Button>View Repo</Button></a>
                </CardFooter>
            </Card>
        </Main>
    )
};
