import { Card, CardHeader, CardBody, CardFooter, Button } from "grommet";

export const ProjectCard = (props) => {
    return (
        <Card justify='center' align='center' background='light-3' border={{'color':'dark-5', 'size':'medium'}} elevation='large' margin='auto'>
            <CardHeader justify='center' pad='small' className='HeaderText'>{props.HeaderText}</CardHeader>
            <CardBody alignContent='center' pad='medium' className='BodyText'>{props.BodyText}</CardBody>
            <CardFooter background='light-3'>
                <a className='ButtonLink' href={props.ButtonLink}><Button>View App</Button></a>
                <a className='ButtonTwoLink' href={props.ButtonTwoLink}><Button>View Repo</Button></a>
            </CardFooter>
        </Card>
    )
};