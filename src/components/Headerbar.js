import { Button, Header, Menu } from "grommet"
import { Home } from 'grommet-icons'


const Headerbar = () => {
  return (
    <Header background="brand" pad="small" position="absolute" responsive={true} align="center" alignContent="center" width={{min:'190px'}}>
      <Button icon={<Home color='accent-1' />} hoverIndicator href='/' />
      {/* <Button icon={<Sun />} color="accent-1" size="small" plain={false} tip="Toggle theme between dark and light!" type="button" /> */}
      <Menu label="Menu" color='accent-1' hoverIndicator
      items={[
        { label: 'Home', href:'/' }, 
        { label: 'About Me', href:'/about' }, 
        { label: 'Contact Me', href:'/contact' }, 
        { label: 'Projects', href:'/projects' },
        {label: 'Weather', href:'/weather'}]} />
    </Header>
  )
};

export default Headerbar;