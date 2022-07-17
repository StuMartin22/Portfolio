import { Button, Card, CardHeader, CardBody, CardFooter, Text } from "grommet";

export const ProjectCard = (props) => {
    return (
            <Card width={{ max:'60vw', min:'small' }} wrap='true' justify='center' align='center' background='light-3' border={{'color':'brand', 'size':'medium'}}>
              <CardHeader justify='center' pad="small" wrap='true'>
                <Text size='large' weight='bold'>{props.HeaderText}</Text>
              </CardHeader>
              <CardBody className='BodyText' wrap='true' alignContent='center' pad="medium" justify='center'>
              {props.BodyText}
              </CardBody>
              <CardFooter background='light-3' wrap='true'>
                <Button primary='true' className='LiveLink' label='View App' href={props.ButtonLink} />
                <Button secondary='true' className='RepoLink' label='View Repo' href={props.ButtonTwoLink}  />
              </CardFooter>
            </Card>
    )
};