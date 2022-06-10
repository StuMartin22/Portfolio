import { Button, Header, Menu } from "grommet"
import { Home } from 'grommet-icons'

const Headerbar = () => {
  return (
<Header background="brand" pad="small" position="absolute">
  <Button icon={<Home />} hoverIndicator />
  {/* <Button icon={<Sun />} color="accent-1" size="small" plain={false} tip="Toggle theme between dark and light!" type="button" /> */}
  <Menu label="Menu" items={[{ label: 'Home' },{label: 'About Me'},{label: 'Contact Me'},{label: 'Projects'}]} />
</Header>
  )
};

export default Headerbar;