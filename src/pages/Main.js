import { Main, Page, PageContent, Heading, Paragraph } from 'grommet'

const Mainpage = () => {
  return (
    <Main pad="small" align='center' justify='center' flex={true} responsive={true} wrap={true} height={{min:'100vh'}} width={{min:'190px'}}>
      <Page kind="narrow" align='center'>
        <PageContent background="light-3" elevation='large' align='center' width={{min:'190px', max:'80vw'}} border={{size:'medium', color:'brand'}} round='small'>
          <Heading>
            Welcome to my portfolio!
          </Heading>
          <Paragraph>
            This is a portfolio I built using React! Check out the menu in the top right to view different pages and learn more about me and what I do! You can find contact information up there or by using the links in the footer below!
          </Paragraph>
        </PageContent>
      </Page>
    </Main>
  )
};

export default Mainpage;