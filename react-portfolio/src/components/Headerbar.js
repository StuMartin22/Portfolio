import { Button, Header, Menu } from "grommet"
import { Home } from 'grommet-icons'


const Headerbar = () => {
  return (
    <Header background="brand" pad="small" position="absolute" responsive={true}>
      <Button icon={<Home />} hoverIndicator='true' href='/' />
      {/* <Button icon={<Sun />} color="accent-1" size="small" plain={false} tip="Toggle theme between dark and light!" type="button" /> */}
      <Menu label="Menu"
      items={[
        { label: 'Home', href:'/' }, 
        { label: 'About Me', href:'/about' }, 
        { label: 'Contact Me', href:'/contact' }, 
        { label: 'Projects', href:'/projects' }]} />
    </Header>
  )
};

export default Headerbar;