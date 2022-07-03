import { Anchor, Button, Footer, Text, Tip } from 'grommet'
// import { Download, Github, Linkedin, Mail, Phone } from 'grommet-icons'
// import phoneRunner from '../constants/copyPhoneFunction'
// import emailRunner from '../constants/copyEmailFunction'
// import { ToolTipAccent } from './ToolTipAccent'
import { GitButton } from './GitHubButton'
import { LinkedInButton } from './LinkedInButton'
import { PhoneButton } from './PhoneButton'
import { MailButton } from './MailButton'
import { ResumeButton } from './ResumeButton'


const Footerbar = () => {
  return (
    <div>
      <Footer pad="small" background={{ "color": "brand", "position": "bottom, sticky" }} responsive='true' wrap='true' overflow='auto'>
        <Text>Contact me:</Text>
        <GitButton iconsize='medium' />
        <LinkedInButton iconsize='medium' />
        <PhoneButton iconsize='medium' />
        <MailButton iconsize='medium' />
        <ResumeButton iconsize='medium' />
        {/* <Button icon={<Github />} hoverIndicator={{ color: 'accent-1' }} href='https://github.com/StuMartin22' /> */}
        {/* <Button icon={<Linkedin />} hoverIndicator={{ color: 'accent-1' }} href='https://www.linkedin.com/in/stumartin22' /> */}
          {/* <ToolTipAccent tipMessage='Click here to copy my phone number!' />
              <Button icon={<Phone />} hoverIndicator={{ color: 'accent-1' }} onClick={phoneRunner} />
          <Tip content='Click here to copy my email!'>
              <Button icon={<Mail />} hoverIndicator={{ color: 'accent-1' }} onClick={emailRunner} />
          </Tip>
          <Tip content='Click here to download my resume!'>
            <Button icon={<Download />} hoverIndicator={{ color: 'accent-1' }} />
          </Tip> */}
        <Anchor label="Home" href="/" hoverIndicator />
      </Footer>
    </div>
  )
};

export default Footerbar;