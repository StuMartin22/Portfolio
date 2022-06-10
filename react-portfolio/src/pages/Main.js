import { Main, Box, Page, PageContent, Heading, Paragraph } from 'grommet'

const Mainpage = () => {
  return(
<Main pad="small" align='center' justify='center' position='relative'>
    <Page kind="narrow">
  <PageContent background="light-3">
    <Heading>
      Welcome to my portfolio! 
    </Heading>
    <Paragraph>
      This is a portfolio I built using React! Check out the menu in the top right to view different pages and learn more about me and what I do! You can find contact information up there as well as by using the links in the footer below! 
    </Paragraph>
  </PageContent>
</Page>
</Main>
  )
};

export default Mainpage;