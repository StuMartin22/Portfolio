import { Box, Carousel, Heading, Main, Paragraph } from 'grommet';
import { ContactCard } from '../components/ContactCard'

const Contact = () => {
    return (
        <Main>
            <Box justifyContent='center' align='center' wrap='true' responsive={true} flex={true}>
                <Heading>
                    How to contact me!
                </Heading>
                <Paragraph margin={{ bottom: '6vh' }}>
                    Are you liking what you see? Are you so offended that you just need to reach out to tell me? Then do so here with one of the following! Email is the best way to get a hold of me, however, any method will do!
                </Paragraph>
                <Carousel controls='arrows'>
                    <ContactCard
                        HeaderText='Email'
                        BodyText='Click the icon to copy my email!'
                    />
                    <ContactCard
                        HeaderText='Phone'
                        BodyText='Click the icon to copy my phone number!'
                    />
                    <ContactCard
                        HeaderText='GitHub'
                        BodyText='Click the icon to view my GitHub!'
                    />
                    <ContactCard
                        HeaderText='LinkedIn'
                        BodyText='Click the icon to connect on LinkedIn!'
                    />
                </Carousel>
            </Box>
        </Main>

    )
};

export default Contact;