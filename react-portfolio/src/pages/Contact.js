import { createElement, useState } from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Carousel, Heading, Main, Paragraph, Tip, Notification} from 'grommet';
import { Download, Github, Linkedin, Mail, Phone } from 'grommet-icons';

const myemail = 'stucodes22@gmail.com'
const myphone = '9188086027'

const emailRunner = () => {
    navigator.clipboard.writeText(myemail);
    console.log('copied to clipboard')
};

const phoneRunner = () => {
    navigator.clipboard.writeText(myphone);
};


const Contact = () => {
  return(

    <Main>
        <Box justify='center' align='center'>
                <Heading>
                    How to contact me!
                </Heading>
                <Paragraph>
                    Are you liking what you see? Are you so offended that you just need to reach out to tell me? Then do so here with one of the following! Email is the best way to get a hold of me, however, any method will do!
                </Paragraph>
            <Carousel controls='arrows'>
                <Card justify='center' align='center' background='light-3' border={{'color':'dark-5', 'size':'medium'}}>
                    <CardHeader pad="medium">Email</CardHeader>
                        <CardBody pad="medium">Click the icon to copy my email address!</CardBody>
                            <CardFooter background="light-2">
                                <Tip content='Click here to copy!'>
                                    <Button align='center'
                                    icon={<Mail color="accent-1" />}
                                    hoverIndicator
                                    onClick= {emailRunner}
                                    />
                                </Tip>
                    </CardFooter>
                </Card>
            </Carousel>
        </Box>
    </Main>

  )
};

export default Contact;