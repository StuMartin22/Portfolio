import { Box, Button, Card, CardBody, CardFooter, CardHeader, Grid, Heading, Main, Text } from 'grommet'

const Myprojects  = () => {
  return(
    <Main align='center' flex='true' pad='medium'>
  <Card width='30vw' height='30vh' pad='medium' elevation='large' margin='auto'>
    <CardHeader>Project 1</CardHeader>
    <CardBody> Here's some text</CardBody>
    <CardFooter><Button>Test1</Button><Button>Test2</Button></CardFooter>
  </Card>

  <Card width='30vw' height='30vh' pad='medium' elevation='large' margin='auto'>
    <CardHeader>Project 1</CardHeader>
    <CardBody> Here's some text</CardBody>
    <CardFooter><Button>Test1</Button><Button>Test2</Button></CardFooter>
  </Card>

  <Card width='30vw' height='30vh' pad='medium' elevation='large' margin='auto'>
    <CardHeader>Project 1</CardHeader>
    <CardBody> Here's some text</CardBody>
    <CardFooter><Button>Test1</Button><Button>Test2</Button></CardFooter>
  </Card>

  </Main>
  )
};


export default Myprojects;