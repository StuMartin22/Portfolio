import { Anchor, Footer, Text } from 'grommet'
import { GitButton } from './GitHubButton'
import { LinkedInButton } from './LinkedInButton'
import { PhoneButton } from './PhoneButton'
import { MailButton } from './MailButton'
// import { ResumeButton } from './ResumeButton'


const Footerbar = () => {
  return (
    <div>
      <Footer pad="small" background={{ "color": "brand", "position": "bottom, sticky" }} responsive='true' wrap='true' overflow='auto'>
        <Text>Contact me:</Text>
        <GitButton iconsize='medium' />
        <LinkedInButton iconsize='medium' />
        <PhoneButton iconsize='medium' />
        <MailButton iconsize='medium' />
        {/* <ResumeButton iconsize='medium' />  */}
        <Anchor label="Home" href="/" hoverIndicator />
      </Footer>
      </div>
  )
};

export default Footerbar;