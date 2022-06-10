import { Button, Header, Menu } from "grommet"
import { Home } from 'grommet-icons'

const Headerbar = () => {
  return (
<Header background="brand">
  <Button icon={<Home />} hoverIndicator />
  <Menu label="View" items={[{ label: 'Home' },{label: 'About Me'},{label: 'Contact Me'},{label: 'Projects'}]} />
</Header>
  )
};

export default Headerbar;