import { Button, Header, Menu } from "grommet"
import { Home } from 'grommet-icons'

const Headerbar = () => {
  return (
<Header background="brand">
  <Button icon={<Home />} hoverIndicator />
  <Menu label="View" items={[{ label: 'Home' }]} />
</Header>
  )
};

export default Headerbar;