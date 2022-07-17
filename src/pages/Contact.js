import { Carousel, Heading, Main, PageContent, Page, Paragraph } from 'grommet';
import { ContactCard } from '../components/ContactCard'

const Contact = () => {
    return (
        <Main pad="small" align='center' justify='center' flex='true' responsive='true' wrap='true' height={{ min: '100vh' }}>
            <Page kind="narrow" align='center'>
                <PageContent background="light-3" elevation='large' align='center' width={{ min: 'auto', max: '80vw' }} margin={{ bottom: '3vh' }} border={{ size: 'medium', color: 'brand' }} round='small' justify='center' responsive={true} bottom={{ margin: '2vh' }}>
                    <Heading>
                        How to contact me!
                    </Heading>
                    <Paragraph margin={{ bottom: '6vh' }}>
                        Are you liking what you see? Are you so offended that you just need to reach out to tell me? Then do so here with one of the following! Email is the best way to get a hold of me, however, any method will do!
                    </Paragraph>
                    </PageContent>
                    <Carousel controls='arrows' elevation='large'>
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
                        <ContactCard
                            HeaderText='Resume'
                            BodyText='Click here to download a copy of my resume!'
                        />
                    </Carousel>
            </Page>
        </Main>

    )
};

export default Contact;