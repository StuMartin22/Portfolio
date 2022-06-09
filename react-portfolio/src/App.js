import React from 'react'
import { Anchor, Button, Footer, Grommet, Header, Heading, Main, Menu, Nav, Paragraph, Text } from 'grommet';
import { Download, Github, Home, Linkedin, Mail, Phone  } from 'grommet-icons'

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
  <Text>Contact me!</Text>
  <Button icon={<Github />} hoverIndicator />
  <Button icon={<Linkedin />} hoverIndicator />
  <Button icon={<Phone />} hoverIndicator />
  <Button icon={<Mail />} hoverIndicator />
  <Button icon={<Download />} hoverIndicator />
  <Anchor label="About" />
</Footer>

    </Grommet>
  );
}

export default App;