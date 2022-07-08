import { Box, Heading, Main, Paragraph, Page, PageContent } from 'grommet'


const Mybio = () => {
  return (
    <div>
      {/* <Main> */}
        {/* <Box justifyContent='center' align='center' wrap='true' responsive={true} flex={true} width='100vh'> */}
          <Page kind='wide' align='center' background={{color:'dark-5'}}>
            <PageContent elevation='medium' margin={{ bottom: '1vh', top:'3vh' }} border={{ size: '3px', color: 'brand' }} align='center' background={{color:'light-3'}} round='medium' width={'80vw'}>
              <Heading>
                My Bio
              </Heading>
            </PageContent>
            <PageContent elevation='medium' margin={{ bottom: '3vh' }} border={{ size: '3px', color: 'brand' }} align='center' background={{color:'light-3'}} round='medium' width={'85vh'}>
              <Paragraph fill='true' justifyContent='center'>
                I graduated from Rogers State University in 2017 with a Bachelor's of Science in Biology -  Environmental Conservation where I received the award of Best Senior Research Capstone for the   Biology - Environmental Conservation class of 2017.
              </Paragraph>
              <Paragraph fill='true'>
                I spent a few years working with and volunteering for the Oklahoma Department of Wildlife   Conservation; particularly in fisheries.
              </Paragraph>
              <Paragraph fill='true'>
                I later moved to Burnsville, MN where I currently reside. I worked as a Retail Sales Consultant for AT&T until the (first) peak of COVID when I decided that the best thing for my family was to  step down from a job facing the public.
              </Paragraph>
              <Paragraph fill='true'>
                I have since been assisting my partner with her small art business as well as doing some self employment projects of my own.
              </Paragraph>
              <Paragraph fill='true'>
                I am now graduated from my intensive full stack development bootcamp through the University of  Minnesota and excited to continue with this new venture of a lifelong passion of technology that satisfied the depth of my brain and it’s love of puzzles!
              </Paragraph>
              <Paragraph fill='true'>
                Languages and technologies I’ve worked with include:
                HTML, CSS, bootstrap (and other similar CSS frameworks), JavaScript, node.js, MySQL, Sequelize,   NoSQL, MongoDB, Mongoose, Insomnia, GraphQL, and React!
              </Paragraph>
              </PageContent>
            </Page>
          {/* </Box> */}
      {/* </Main> */}
    </div>
  )
};


export default Mybio;