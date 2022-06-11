import { Footer } from 'grommet'
import { Anchor, Button, Text} from 'grommet'
import { Download, Github, Linkedin, Mail, Phone  } from 'grommet-icons'

const Footerbar = () => {
  return (
<Footer  pad="small" background={{"color":"brand","position":"bottom, sticky"}}>
  <Text>Contact me:</Text>
  <Button icon={<Github />} hoverIndicator />
  <Button icon={<Linkedin />} hoverIndicator />
  <Button icon={<Phone />} hoverIndicator />
  <Button icon={<Mail />} hoverIndicator />
  <Button icon={<Download />} hoverIndicator />
  <Anchor label="Home" href="#home" />
</Footer>
  )
};

export default Footerbar;