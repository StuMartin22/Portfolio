import React from 'react'
import { Anchor, Button, Footer, Grommet, Header, Heading, Main, Menu, Paragraph, Text } from 'grommet';
import { Home } from 'grommet-icons'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme}>
<Header background="brand">
  <Button icon={<Home />} hoverIndicator />
  <Menu label="account" items={[{ label: 'logout' }]} />
</Header>
<Main pad="large">
  <Heading></Heading>
  <Paragraph></Paragraph>
</Main>
<Footer background="brand" pad="medium">
  <Text>Copyright</Text>
  <Anchor label="About" />
</Footer>
    </Grommet>
  );
}

export default App;