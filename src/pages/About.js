// importing styled components from Grommet
import { Heading, Main, Paragraph, Page, PageContent } from 'grommet'
// import Badge component
import Badge from '../components/CredlyBadge';

// function to return page info. 
const Mybio = () => {
  return (
    // Setting up content area of page
    <Main pad="small" align='center' justify='center' flex={true} responsive={true} wrap={true} height={{ min: '100vh' }} width={{min:'190px'}}>
      <Page kind="narrow" align='center'>
        <PageContent background="light-3" elevation='large' align='center' width={{ min: '190px', max: '80vw' }} margin={{ bottom: '3vh' }} border={{ size: '3px', color: 'brand' }} round='small' justify='center' responsive={true}>
          <Heading responsive={true}>My Bio</Heading>
        </PageContent>
        <PageContent background="light-3" elevation='large' align='center' width={{ min: '190px', max: '80vw' }} overflow='auto' border={{ size: '3px', color: 'brand' }} round='small'>
          {/* following is information about myself. Formatting included via props in Grommet tags */}
          <Paragraph fill='true' textAlign='center' justify='center'>
            I graduated from Rogers State University in 2017 with a Bachelor's of Science in Biology -  Environmental Conservation where I received the award of Best Senior Research Capstone for the program that year.
          </Paragraph>
          <Paragraph fill='true' textAlign='center' justify='center'>
            I spent a few years working with and volunteering for the Oklahoma Department of Wildlife   Conservation; particularly in fisheries.
          </Paragraph>
          <Paragraph fill='true' textAlign='center' justify='center'>
            I later moved to Burnsville, MN where I currently reside. I worked as a Retail Sales Consultant for AT&T until the (first) peak of COVID when I decided that the best thing for my family was to  step down from a job facing the public.
          </Paragraph>
          <Paragraph fill='true' textAlign='center' justify='center'>
            I have since been assisting my partner with her small art business as well as doing some self employment projects of my own.
          </Paragraph>
          <Paragraph fill='true' textAlign='center' justify='center'>
            I am now graduated from my intensive full stack development bootcamp through the University of  Minnesota and excited to continue with this new venture of a lifelong passion of technology that satisfied the depth of my brain and it’s love of puzzles!
          </Paragraph>

          {/* return credly badge imported from CredlyBadge component */}
          <Badge />

          <Paragraph fill='true' textAlign='center' justify='center'>
            Languages and technologies I’ve worked with include:
            HTML, CSS, bootstrap (and other similar CSS frameworks), JavaScript, node.js, MySQL, Sequelize, NoSQL, MongoDB, Mongoose, Insomnia, GraphQL, and React!
          </Paragraph>
        </PageContent>
      </Page>
    </Main>
  )
};

//exporting Mybio component for import elsewhere
export default Mybio;